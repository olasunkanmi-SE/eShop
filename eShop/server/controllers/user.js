const { validate } = require("../validation/signup");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res) => {
  const { error } = validate(req.body);
  if (error) {
    return res.status(400).json(error.details[0].message);
  }
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already exists");
  }
  user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.confirmPassword = await bcrypt.hash(user.confirmPassword, salt);

  await user.save();
  return res.status(201).json({
    message: "User created successfully",
    createdUser: user,
    request: {
      type: "GET",
      url: `http:localhost:5000/api/users/${user._id}`,
    },
  });
};
