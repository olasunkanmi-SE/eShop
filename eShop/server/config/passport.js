import { Strategy, ExtractJwt } from "passport-jwt";
const JWTStrategy = Strategy;
const ExtractJWT = ExtractJwt;
import { User } from "../models/User.js";
import { keys } from "../config/default.js";
import * as winston from "winston";

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: keys.jwtPrivateKey,
};

export const passportStrategy = (passport) => {
  passport.use(
    new JWTStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload._id);
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (error) {
        winston.error();
      }
    })
  );
};
