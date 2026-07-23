import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { generateAstrologyReport } from "../controllers/astrologyController.js";

const router = Router();

router.post(
  "/",
  authMiddleware,
  generateAstrologyReport
);

export default router;