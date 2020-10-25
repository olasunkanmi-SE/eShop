import express from "express";
const router = express.Router();
import * as productController from "../../controllers/product.js";
import { isAdmin } from "../../middlewares/admin.js";
import { auth } from "../../middlewares/auth.js";

router.post("/create", [auth, isAdmin], productController.createProduct);
router.get("/product/:id", productController.getProductById);
router.get("/", productController.getProducts);
router.patch("/:id", [auth, isAdmin], productController.updateProduct);
router.delete("/:id", [auth, isAdmin], productController.deleteProduct);

export const productRouter = router;
