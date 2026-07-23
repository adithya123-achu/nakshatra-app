import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { saveBirthDetails } from "../controllers/birthDetailsController.js";

const router = express.Router();

router.post(
  "/",
  (req, res, next) => {
    console.log("✅ POST /api/birth-details reached");
    next();
  },
  authMiddleware,
  saveBirthDetails
);

export default router;