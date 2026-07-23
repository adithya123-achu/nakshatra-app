import dotenv from "dotenv";

dotenv.config();

const requiredEnvVars = ["DATABASE_URL", "JWT_SECRET"];

const missing = requiredEnvVars.filter(
  (key) => !process.env[key]
);

if (
  missing.length > 0 &&
  process.env.NODE_ENV === "production"
) {
  throw new Error(
    `Missing required environment variables: ${missing.join(", ")}`
  );
}

const env = {
  nodeEnv: process.env.NODE_ENV || "development",

  port: parseInt(process.env.PORT || "5000", 10),

  databaseUrl: process.env.DATABASE_URL || "",

  jwt: {
    secret:
      process.env.JWT_SECRET ||
      "dev-secret-change-in-production",

    expiresIn:
      process.env.JWT_EXPIRES_IN || "7d",
  },

  cors: {
    origin:
      process.env.CORS_ORIGIN ||
      "http://localhost:5173",
  },

  rateLimit: {
    windowMs: parseInt(
      process.env.RATE_LIMIT_WINDOW_MS || "900000",
      10
    ),

    max: parseInt(
      process.env.RATE_LIMIT_MAX || "100",
      10
    ),
  },

  // Claude AI
  claude: {
    apiKey: process.env.CLAUDE_API_KEY || "",
  },

  // Gemini AI
  geminiApiKey: process.env.GEMINI_API_KEY || "",
};

export default env;