/**
 * Base model utilities for PostgreSQL queries.
 * Feature-specific models will extend these patterns.
 */
import { query } from '../config/database.js';

export const findById = async (table, id) => {
  const result = await query(`SELECT * FROM ${table} WHERE id = $1`, [id]);
  return result.rows[0] || null;
};

export const findOne = async (table, conditions) => {
  const keys = Object.keys(conditions);
  const values = Object.values(conditions);
  const where = keys.map((key, i) => `${key} = $${i + 1}`).join(' AND ');
  const result = await query(`SELECT * FROM ${table} WHERE ${where} LIMIT 1`, values);
  return result.rows[0] || null;
};

export default { findById, findOne };
