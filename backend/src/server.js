import app from "./app.js";
import env from "./config/env.js";
import { connectDatabase } from "./config/database.js";

const startServer = async () => {
  try {
    console.log("Step 1: Connecting to MongoDB...");
    await connectDatabase();

    console.log("Step 2: Starting Express Server...");

    const PORT = process.env.PORT || env.port;

    const server = app.listen(PORT, "0.0.0.0", () => {
      console.log(
        `🚀 Nakshatra API running on port ${PORT} [${env.nodeEnv}]`
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