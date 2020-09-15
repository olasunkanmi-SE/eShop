const { validate } = require("../validation/signup");
const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const winston = require("winston");

//Register a new user

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

//Get all users

module.exports.getUsers = async (req, res) => {
  let users = await User.find();
  let response = {
    count: users.length,
    users: users.map((user) => {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        request: {
          type: "GET",
          url: `http://localhost:5000/api/users/${user._id}`,
        },
        date: user.date,
      };
    }),
  };
  return res.status(200).json(response);
};

module.exports.getCurrentUser = async (req, res) => {
  let user = req.user;
  return res.status(200).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    date: user.date,
  });
};

module.exports.resetPassword = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(404).send("user does not exist");
  }
  crypto.randomBytes(32, (err, buffer) => {
    if (err) {
      return winston.error(err);
    }
    const token = buffer.toString("hex");
    user.resetToken = token;
    user.resetTokenExpiration = Date.now() + 3600000;
    user.save();
  });
};
