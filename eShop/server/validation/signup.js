const Joi = require("joi");
const validateSignUp = (user) => {
  const Schema = Joi.object().keys({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).email().required(),
    password: Joi.string().min(5).max(1024).required(),
    confirmPassword: Joi.ref("password"),
  });

  return Schema.validate(user);
};

exports.validate = validateSignUp;
