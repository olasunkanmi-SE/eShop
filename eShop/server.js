import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import passport from "passport";
import { passportStrategy } from "./server/config/passport.js";
import { logger } from "./server/config/winston.js";
import { error } from "./server/middlewares/error.js";
import { authRouter } from "./server/routes/api/auth.js";
import { productRouter } from "./server/routes/api/product.js";
import { userRouter } from "./server/routes/api/user.js";
dotenv.config();
import("express-async-errors");

const auth = authRouter;
const user = userRouter;
const product = productRouter;

// // connect to database
// mongoose
//   .connect("mongodb://localhost/shop", { useFindAndModify: false })
//   .then(() => console.log("database connected successfully"))
//   .catch((err) => console.log(err));

// Connect to Atlas database online

mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log(err));

const app = express();

app.use(cors());

//Parse the body of a request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//Initialize passport
app.use(passport.initialize());

//protect, the protected routes with passport
passportStrategy(passport);

//Specify API locations
app.use("/api/login", auth);
app.use("/api/users", user);
app.use("/api/products", product);

//Routes error handling and logging
app.use(error);
app.use(morgan("combined", { stream: logger.stream }));

// Assign port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
