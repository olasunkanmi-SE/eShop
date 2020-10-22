import Joi from "joi";
export const validateProduct = (review) => {
  const Schema = Joi.object().keys({
    name: Joi.string().min(5).max(250).required(),
    rating: Joi.number().min(5).max(250).required(),
    comment: Joi.string().min(5).max(250).required(),
  });
  return Schema.validate(review);
};
