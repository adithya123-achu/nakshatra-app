/**
 * Database migration runner.
 * Add migration SQL files to src/database/migrations/ as the schema evolves.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../config/database.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const migrationsDir = path.join(__dirname, 'migrations');

const runMigrations = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      applied_at TIMESTAMPTZ DEFAULT NOW()
    )
  `);

  if (!fs.existsSync(migrationsDir)) {
    console.log('No migrations directory found. Skipping.');
    process.exit(0);
  }

  const files = fs
    .readdirSync(migrationsDir)
    .filter((f) => f.endsWith('.sql'))
    .sort();

  for (const file of files) {
    const { rows } = await pool.query(
      'SELECT 1 FROM schema_migrations WHERE name = $1',
      [file]
    );

    if (rows.length > 0) {
      console.log(`Skipping already applied: ${file}`);
      continue;
    }

    const sql = fs.readFileSync(path.join(migrationsDir, file), 'utf8');
    const client = await pool.connect();

    try {
      await client.query('BEGIN');
      await client.query(sql);
      await client.query('INSERT INTO schema_migrations (name) VALUES ($1)', [file]);
      await client.query('COMMIT');
      console.log(`Applied: ${file}`);
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  console.log('Migrations complete.');
  process.exit(0);
};

runMigrations().catch((err) => {
  console.error('Migration failed:', err);
  process.exit(1);
});
