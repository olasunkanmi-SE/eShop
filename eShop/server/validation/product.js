import Joi from "joi";
export const validateProduct = (product) => {
  const Schema = Joi.object().keys({
    name: Joi.string().min(5).max(250).required(),
    image: Joi.string().min(5).max(250).required(),
    brand: Joi.string().min(5).max(250).required(),
    category: Joi.string().min(2).max(250).required(),
    description: Joi.string().min(5).max(250).required(),
    price: Joi.number(),
  });
  return Schema.validate(product);
};
