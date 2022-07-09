import { getBag, getProducts } from "../controllers/productsController.js";
import { Router } from "express";
import validateUserMiddleware from "../middlewares/validateUserMiddleware.js";
import validateSchemaSignIn from "../middlewares/validateSchemaSignIn.js";

const router = Router();

// userController.js
router.post("/main", validateUserMiddleware, getProducts);
router.get("/buy", validateUserMiddleware, getBag);

export default router;