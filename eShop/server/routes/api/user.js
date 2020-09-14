const express = require("express");
const router = express.Router();
const userController = require("../../controllers/user");
const auth = require("../../middlewares/auth");

router.post("/signup", userController.register);
router.get("/", auth, userController.getUsers);
router.get("/current", auth, userController.getCurrentUser);

module.exports = router;
