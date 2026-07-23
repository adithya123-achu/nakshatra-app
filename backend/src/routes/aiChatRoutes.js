import { Router } from "express";

import authMiddleware from "../middleware/authMiddleware.js";
import { chatWithAstrologer } from "../controllers/aiChatController.js";

const router = Router();

// AI Chat
router.post("/", authMiddleware, chatWithAstrologer);

export default router;