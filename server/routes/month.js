import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";

import { getAmount, getDetails, getSection } from "../controllers/month.js";

router.get("/:amount", auth, getAmount);
router.get("/:details", auth, getDetails);
router.get("/:details/:section", auth, getSection)

export default router;