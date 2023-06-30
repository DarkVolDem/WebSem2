import { Router } from "express";
import { addNewOrder, getOrdersSort } from "../routes/routes.js";

const router = Router();

router.post("/orders", addNewOrder);
router.get("/orders?:sort", getOrdersSort);

export default router;