import { signUp, signIn, logOut } from "../controllers/userController.js";
import { Router } from "express";
import validateUserMiddleware from "../middlewares/validateUserMiddleware.js";
import validateSchemaSignIn from "../middlewares/validateSchemaSignIn.js";

const router = Router();

// userController.js
router.post("/sign-up", signUp);
router.post("/sign-in", validateSchemaSignIn, signIn);
router.delete("/logout", validateUserMiddleware, logOut);

export default router;
