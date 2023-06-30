import { Router } from "express";
import { addNewComment, getLastComments } from "../routes/routes.js";

const router = Router();

router.post("/submit", addNewComment);
router.get("", getLastComments);

export default router;