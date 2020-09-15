const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");
const auth = require("../../middlewares/auth");

router.post("/signup", userController.register);
router.get("/", auth, userController.getUsers);
router.get("/current", auth, userController.getCurrentUser);
router.post("/resetpassword", userController.resetPassword);
router.get('/reset/:token', userController.getUserToken);

module.exports = router;