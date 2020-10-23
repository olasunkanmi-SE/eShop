import Joi from "joi";
import { isEmpty } from "./isEmpty.js";
import validator from "validator";

export const validateSignUp = (user) => {
  const Schema = Joi.object().keys({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(3).max(50).email().required(),
    password: Joi.string().min(5).max(1024).required(),
    confirmPassword: Joi.ref("password"),
  });

  return Schema.validate(user);
};

export const validateUserUpdate = (data) => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.isAdmin = !isEmpty(data.isAdmin) ? data.isAdmin : "";
  data.isActive = !isEmpty(data.isActive) ? data.isActive : "";

  if (!validator.isLength(data.name, { min: 5, max: 50 })) {
    errors.name = "Name should be between 5 and 50 characters ";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (!validator.isEmail(data.email)) {
    errors.email = "A valid email address is required";
  }

  if (validator.isEmpty(data.isAdmin)) {
    errors.isAdmin = "isAdmin field cannot be empty";
  }

  if (!validator.isBoolean(data.isAdmin)) {
    errors.isAdmin = "Admin property must be a boolean";
  }

  if (validator.isEmpty(data.isActive)) {
    errors.isActive = "isActive field cannot be empty";
  }

  if (!validator.isIn(data.isActive, [0, 1])) {
    errors.isActive = "isActive must be 0 or 1";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
