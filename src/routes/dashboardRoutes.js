import express from "express";
import { getSummary } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Protected route
router.get("/summary", protect, getSummary);

export default router;