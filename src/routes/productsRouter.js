import { deleteItemBag, getBag, getProducts, postAdrress, updateItemBag, postProducts } from "../controllers/productsController.js";
import { Router } from "express";
import validateUserMiddleware from "../middlewares/validateUserMiddleware.js"; 
import validateSchemaAdrress from "../middlewares/validateSchemaAdrress.js";

const router = Router();

// productsController.js
router.post("/products", postProducts);
router.get("/products", getProducts);
router.post("/main", validateUserMiddleware, getProducts);
router.get("/buy", validateUserMiddleware, getBag); 
router.put("/buy", validateUserMiddleware, updateItemBag); 
router.delete("/buy", validateUserMiddleware, deleteItemBag);
router.post("/finish", validateUserMiddleware, validateSchemaAdrress, postAdrress);

export default router;
