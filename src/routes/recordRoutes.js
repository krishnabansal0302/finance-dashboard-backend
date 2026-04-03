import express from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord
} from "../controllers/recordController.js";

import { protect, authorizeRoles } from "../middleware/authMiddleware.js";

const router = express.Router();

// 🔐 Only logged-in users
router.use(protect);

router.post("/", authorizeRoles("admin"), createRecord);
router.get("/", getRecords);
router.put("/:id", authorizeRoles("admin"), updateRecord);
router.delete("/:id", authorizeRoles("admin"), deleteRecord);

export default router;