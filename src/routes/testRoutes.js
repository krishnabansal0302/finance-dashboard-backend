import express from "express";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Only logged-in users
router.get("/protected", protect, (req, res) => {
  res.json({ message: "You are authorized", user: req.user });
});

// 👑 Only admin
router.get("/admin", protect, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

export default router;