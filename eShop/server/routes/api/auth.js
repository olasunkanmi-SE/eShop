import express from "express";
const router = express.Router();
import * as authController from "../../controllers/auth.js";

router.post("/", authController.auth);

export const authRouter = router;
