import express from "express";
import { updateUserRole } from "../controllers/userController.js";
import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// 👑 Only admin can change roles
router.patch("/:id/role", protect, authorizeRoles("admin"), updateUserRole);

export default router;