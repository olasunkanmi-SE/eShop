const { User } = require("./../models/User");
const { validate } = require("./../validation/auth");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../config/default.json");

//Authenticate a user

module.exports.auth = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  let user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send("Invalid Username or Password");
  }
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(404).send("invalid Username or Password");
  }
  const payload = { _id: user._id, email: user.email };
  const token = await jwt.sign(payload, keys.jwtPrivateKey, {
    expiresIn: 3600,
  });
  return res.status(200).json({
    success: true,
    message: "user signed in Successfully",
    expiresIn: 3600,
    token: `Bearer ${token}`,
  });
};
