import mongoose from "mongoose";
import Joi from "joi";

const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 1024,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Number,
    default: 0,
  },
  confirmPassword: Joi.ref("password"),
  resetToken: String,
  resetTokenExpiration: Date,
  date: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model("User", userSchema);
