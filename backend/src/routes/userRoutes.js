import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

import {
  getProfile,
  updateProfile,
  changePassword,
  updateBirthDetails,
} from "../controllers/userController.js";

const router = Router();

// ================= PROFILE =================

// Get logged-in user's profile
router.get(
  "/profile",
  authMiddleware,
  getProfile
);

// Update name & email
router.put(
  "/profile",
  authMiddleware,
  updateProfile
);

// Change password
router.put(
  "/profile/password",
  authMiddleware,
  changePassword
);

// Update birth details
router.put(
  "/birth-details",
  authMiddleware,
  updateBirthDetails
);

export default router;