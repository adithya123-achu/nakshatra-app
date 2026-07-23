import { Router } from "express";
import { searchLocation } from "../controllers/locationController.js";

const router = Router();

router.get("/search", searchLocation);

export default router;