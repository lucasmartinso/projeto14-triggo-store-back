import {
  getBag,
  getProducts,
  postProducts,
} from "../controllers/productsController.js";
import { Router } from "express";
import validateUserMiddleware from "../middlewares/validateUserMiddleware.js";

const router = Router();

// productsController.js
router.post("/products", postProducts);
router.get("/products", getProducts);
router.post("/main", validateUserMiddleware, getProducts);
router.get("/buy", validateUserMiddleware, getBag);

export default router;
