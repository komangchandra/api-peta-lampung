import express from "express";
import {
  getAllKabupaten,
  createKabupaten,
} from "../controllers/KabupatenController.js";

const router = express.Router();

router.get("/api/kabupaten", getAllKabupaten);
router.post("/api/kabupaten", createKabupaten);

export default router;
