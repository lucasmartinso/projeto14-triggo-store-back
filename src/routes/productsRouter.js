import { deleteItemBag, getBag, getProducts, postAdrress, updateItemBag } from "../controllers/productsController.js";
import { Router } from "express";
import validateUserMiddleware from "../middlewares/validateUserMiddleware.js";
import validateSchemaSignIn from "../middlewares/validateSchemaSignIn.js";

const router = Router();

// userController.js
router.post("/main", validateUserMiddleware, getProducts);
router.get("/buy", validateUserMiddleware, getBag); 
router.put("/buy", validateUserMiddleware, updateItemBag); 
router.delete("/buy", validateUserMiddleware, deleteItemBag);
router.post("/buy", validateUserMiddleware, postAdrress);

export default router;