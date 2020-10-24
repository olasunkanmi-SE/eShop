import express from "express";
const router = express.Router();
import * as productController from "../../controllers/product";
import { isAdmin } from "../../middlewares/admin";
import { auth } from "../../middlewares/auth";

router.post("/creatproduct", productController.createProduct);

export const productRouter = router;
