import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { createMonth, getMonths, } from "../controllers/month.js";

// router.get("/:id", auth, getAmount);
// router.post("/:id", auth, createAmount);
// router.patch("/:id", auth, updateAmount);


router.post("/", auth, createMonth);
router.get("/", auth, getMonths);

export default router;