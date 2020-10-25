import { validateSignUp, validateUserUpdate } from "../validation/user.js";
import { User } from "../models/User.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import winston from "winston";
import { isAdmin } from "../middlewares/admin.js";

//Register a new user

export const register = async (req, res) => {
  const { error } = validateSignUp(req.body);
  if (error) {
    return res.status(400).json({ validationError: error.details[0].message });
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

export const getUsers = async (req, res) => {
  let users = await User.find({});
  let response = {
    count: users.length,
    users: users.map((user) => {
      return {
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        isActive: user.isActive,
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

//Get User by ID

export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    return res
      .status(200)
      .json({ user, url: `http://localhost:5000/api/users/${user._id}` });
  } else {
    return res.status(404).json({ message: "user not found" });
  }
};

//Return current logged in user

export const getCurrentUser = async (req, res) => {
  let user = req.user;
  return res.status(200).json({
    user,
  });
};

//Generate a URL string to reset user password

export const generatePasswordResetURL = async (req, res) => {
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
    return res
      .status(201)
      .json(`http://localhost:5000/api/users/reset/${token}`);
  });
};

//Retrieve user information from the URl params

export const getUserToken = async (req, res) => {
  const token = req.params.token;
  if (token) {
    const user = await User.findOne({ resetToken: token });
    if (user && user.resetTokenExpiration > Date.now()) {
      return res.status(200).json({
        user: {
          userId: user._id,
          resetToken: user.resetToken,
          tokenExpiry: user.resetTokenExpiration,
        },
      });
    } else if (user && user.resetTokenExpiration < Date.now()) {
      return res.status(400).send("password reset token expired");
    } else {
      return res.status(404).send("user does not exist");
    }
  } else {
    winston.error();
  }
};

//Reset a user password

export const resetPassword = async (req, res) => {
  const user = await User.findOne({ _id: req.body.userId });
  if (user) {
    const newPassword = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    user.confirmPassword = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    user.save();
    return res
      .status(201)
      .json({ status: "success", message: "password reset successfully" });
  } else {
    return res.status(404).send("user does not exist");
  }
};

//Update a User

export const updateUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    const { errors, isValid } = validateUserUpdate(req.body);
    if (!isValid) {
      return res.status(400).json({ errors });
    } else {
      const userFields = {};
      if (req.body.isAdmin) {
        userFields.isAdmin = req.body.isAdmin;
      }
      if (req.body.name) {
        userFields.name = req.body.name;
      }
      if (req.body.email) {
        userFields.email = req.body.email;
      }
      if (req.body.isAdmin) {
        userFields.isAdmin = req.body.isAdmin;
      }
      if (req.body.isActive) {
        userFields.isActive = req.body.isActive;
      }
      user = await User.findByIdAndUpdate(
        { _id: user._id },
        { $set: userFields },
        { new: true }
      );
      return res.status(201).json({
        message: `product was updated successfully`,
        user,
        url: `http://localhost:5000/api/users/${user._id}`,
      });
    }
  } else if (!user) {
    return res.status(404).json("User does not exist");
  }
};

//delete a User
export const deleteUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  if (user) {
    if (isAdmin) {
      await User.findOneAndRemove({ _id: user._id });
      res.status(201).json({ success: true });
    }
  } else {
    return res.status(404).json("User does not exist");
  }
};
