const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;
const { User } = require("../models/User");
const keys = require("../config/default.json");
const winston = require("winston");

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwtPrivateKey,
};

module.exports = (passport) => {
  passport.use(
    new JWTStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload._id);
        if (user) {
          return done(null, user);
        } else {
          console.log("no user");
          return done(null, false);
        }
      } catch (error) {
        winston.error(error);
      }
    })
  );
};
