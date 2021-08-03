import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { createMonth, getAmount, createAmount, updateAmount, getDetails, getSection } from "../controllers/month.js";

// router.get("/:id", auth, getAmount);
// router.post("/:id", auth, createAmount);
// router.patch("/:id", auth, updateAmount);


router.post("/", auth, createMonth);
router.get("/", function(res, req, next) {
    next("Test month");
});

export default router;