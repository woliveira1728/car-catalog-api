import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import logger from "morgan";
import { carsRouter, userRouter } from "./routes";
import { HandleErrors } from "./errors/handleErrors.middleware";
import { initSwagger } from "./configs/swagger";

export const app = express();
app.use(helmet());

app.use(logger("combined"));

app.use(json());

app.use("/cars", carsRouter);

app.use("/users", userRouter);

initSwagger(app);

app.use(HandleErrors.execute);