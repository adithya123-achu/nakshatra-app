import app from "./app.js";
import env from "./config/env.js";
import { connectDatabase } from "./config/database.js";

const startServer = async () => {
  try {
    console.log("Step 1: Connecting to MongoDB...");
    await connectDatabase();

    console.log("Step 2: Starting Express Server...");

    const server = app.listen(env.port, "127.0.0.1", () => {
      console.log(
        `🚀 Nakshatra API running on http://127.0.0.1:${env.port} [${env.nodeEnv}]`
      );
      console.log("Server Info:", server.address());
    });

    server.on("error", (err) => {
      console.error("❌ Server Error:", err);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();