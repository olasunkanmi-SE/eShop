import Joi from "joi";
import validator from "validator";
import { isEmpty } from "./isEmpty.js";
export const validateProduct = (product) => {
  const Schema = Joi.object().keys({
    name: Joi.string().min(5).max(250).required(),
    image: Joi.string().min(5).max(250).required(),
    brand: Joi.string().min(5).max(250).required(),
    category: Joi.string().min(2).max(250).required(),
    description: Joi.string().min(5).max(250).required(),
    countInStock: Joi.number().required(),
    price: Joi.number().required(),
  });
  return Schema.validate(product);
};

export const validateProductUpdate = (data) => {
  let errors = {};

  if (data.name) {
    data.name = !isEmpty(data.name)
      ? data.name
      : (errors.name = "Name of product is required");
    if (!validator.isLength) {
      errors.name = "Name should be at least 5 characters";
    }
  }

  if (data.brand) {
    data.brand = !isEmpty(data.brand)
      ? data.brand
      : (errors.brand = "Brand of product is required");
    if (!validator.isLength) {
      errors.brand = "Brand should be at least 5 characters";
    }
  }

  if (data.description) {
    data.description = !isEmpty(data.description)
      ? data.description
      : (errors.description = "Description of product is required");
    if (!validator.isLength) {
      errors.description = "Description should be at least 5 characters";
    }
  }

  if (data.category) {
    data.category = !isEmpty(data.category)
      ? data.category
      : (errors.category = "Category of product is required");
    if (!validator.isLength) {
      errors.category = "Category should be at least 5 characters";
    }
  }

  if (data.countInStock) {
    data.countInStock = !isEmpty(data.countInStock)
      ? data.countInStock
      : (errors.countInStock = "CountInStock of product is required");
  }

  if (data.price) {
    data.price = !isEmpty(data.price)
      ? data.price
      : (errors.price = "price of product is required");
  }

  if (data.image) {
    data.image = !isEmpty(data.image)
      ? data.image
      : (errors.image = "product image path is required");
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
