import express from "express";
const router = express.Router();
import * as userController from "../../controllers/user.js";
import { auth } from "../../middlewares/auth.js";
import { isAdmin } from "../../middlewares/admin.js";

router.post("/signup", userController.register);
router.get("/", userController.getUsers);
router.get("/current", auth, userController.getCurrentUser);
router.post("/generatetoken", userController.generatePasswordResetURL);
router.get("/reset/:token", userController.getUserToken);
router.post("/resetpassword", userController.resetPassword);
router.put("/update/:id", userController.updateUser);

export const userRouter = router;
