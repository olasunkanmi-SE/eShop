const Joi = require("joi");
module.exports.validateSignUp = (user) => {
  const Schema = Joi.object().keys({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string()
      .min(5)
      .max(50)
      .email({ mainDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(5).max(1024).required(),
    confirmPassword: Joi.string().min(5).max(1024).required(),
  });

  return Schema.validate(user);
};
