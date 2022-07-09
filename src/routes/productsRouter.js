import { getproducts } from "../controllers/productsController.js";
import { Router } from "express";

const router = Router();

router.get("/products", getproducts);

export default router;
