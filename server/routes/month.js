import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { createMonth, getMonths, } from "../controllers/month.js";

// router.get("/:id", auth, getAmount);
// router.post("/:id", auth, createAmount);
// router.patch("/:id", auth, updateAmount);


router.post("/", auth, createMonth);
router.post("/months", auth, getMonths);
// router.get("/months", function(req, res, next) {
//     next("Hello test");
//     console.log("test!");
// })

export default router;