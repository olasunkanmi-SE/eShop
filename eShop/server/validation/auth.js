const Joi = require("joi");

validateSignIn = (user) => {
  const Schema = Joi.object().keys({
    email: Joi.string()
      .min(5)
      .max(50)
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(5).max(1024).required(),
  });

  return Schema.validate(user);
};

exports.validate = validateSignIn;
