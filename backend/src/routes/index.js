import { Router } from "express";

import astrologyRoutes from "./astrology.js";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import locationRoutes from "./locationRoutes.js";
import birthDetailsRoutes from "./birthDetailsRoutes.js";
import historyRoutes from "./historyRoutes.js";
import horoscopeRoutes from "./horoscopeRoutes.js";
import aiChatRoutes from "./aiChatRoutes.js";

const router = Router();

router.get("/", (_req, res) => {
  res.json({
    message: "Nakshatra API",
    version: "1.0.0",
  });
});

router.use("/auth", authRoutes);

router.use("/user", userRoutes);

router.use("/location", locationRoutes);

router.use("/birth-details", birthDetailsRoutes);

router.use("/astrology", astrologyRoutes);

router.use("/history", historyRoutes);

router.use("/horoscope", horoscopeRoutes);

// 🤖 AI Astrologer Chat
router.use("/chat", aiChatRoutes);

export default router;