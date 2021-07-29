import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { getAmount, createAmount, updateAmount, getDetails, getSection } from "../controllers/month.js";

router.get("/:id", auth, getAmount);
// router.get("/:details", auth, getDetails);
// router.get("/:details/:section", auth, getSection)

router.post("/:id", auth, createAmount);
router.patch("/:id", auth, updateAmount);

export default router;