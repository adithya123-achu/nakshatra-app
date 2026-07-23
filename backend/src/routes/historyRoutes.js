import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getUserHistory,
  getHistoryById,
  deleteHistory,
} from "../controllers/historyController.js";

const router = Router();

// Get all reports
router.get("/", authMiddleware, getUserHistory);

// Get one report
router.get("/:id", authMiddleware, getHistoryById);

// Delete one report
router.delete("/:id", authMiddleware, deleteHistory);

export default router;