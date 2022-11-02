import dotenv from "dotenv";
import { ExtractJwt, Strategy } from "passport-jwt";
import * as winston from "winston";
import { User } from "../models/User.js";
const JWTStrategy = Strategy;
const ExtractJWT = ExtractJwt;
dotenv.config();

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWTSECRET,
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
