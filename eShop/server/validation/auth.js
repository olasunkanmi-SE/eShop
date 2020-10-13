import Joi from "joi";

export const validateSignIn = (user) => {
  const Schema = Joi.object().keys({
    email: Joi.string().min(5).max(50).email().required(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return Schema.validate(user);
};
