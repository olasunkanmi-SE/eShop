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

  if (data.name) {
    data.name = !isEmpty(data.name)
      ? data.name
      : (errors.name = "Name is required");
    if (!validator.isLength(data.name, { min: 5, max: 50 })) {
      errors.name = "Name should be between 5 and 50 characters ";
    }
  }

  if (data.email) {
    data.email = !isEmpty(data.email) ? data.email : "";
    if (validator.isEmpty(data.email)) {
      errors.email = "Email is required";
    }

    if (!validator.isEmail(data.email)) {
      errors.email = "A valid email address is required";
    }
  }

  if (data.isAdmin) {
    data.isAdmin = !isEmpty(data.isAdmin) ? data.isAdmin : "";
    if (validator.isEmpty(data.isAdmin)) {
      errors.isAdmin = "isAdmin is required";
    }

    if (!validator.isBoolean(data.isAdmin)) {
      errors.isAdmin = "Admin property must be a boolean";
    }
  }

  if (data.isActive) {
    data.isActive = !isEmpty(data.isActive) ? data.isActive : "";
    if (validator.isEmpty(data.isActive)) {
      errors.isActive = "isActive is required";
    }

    if (!validator.isIn(data.isActive, [0, 1])) {
      errors.isActive = "isActive must be 0 or 1";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
