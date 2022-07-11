import {
  deleteItemBag,
  getBag,
  getProducts,
  postAdrress,
  updateItemBag,
  postProducts,
  deleteProducts,
} from "../controllers/productsController.js";
import { Router } from "express";
import validateUserMiddleware from "../middlewares/validateUserMiddleware.js";

const router = Router();

// productsController.js
router.delete("/products", deleteProducts);
router.post("/products", postProducts);
router.get("/products", getProducts);
router.post("/main", validateUserMiddleware, getProducts);
router.get("/buy", validateUserMiddleware, getBag);
router.put("/buy", validateUserMiddleware, updateItemBag);
router.delete("/buy", validateUserMiddleware, deleteItemBag);
router.post("/buy", validateUserMiddleware, postAdrress);

export default router;
