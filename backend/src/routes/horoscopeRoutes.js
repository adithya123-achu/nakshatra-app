import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import { getDailyHoroscope } from "../controllers/horoscopeController.js";

const router = Router();

// Get today's horoscope
router.get(
  "/today",
  authMiddleware,
  getDailyHoroscope
);

export default router;