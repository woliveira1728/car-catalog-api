import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import helmet from "helmet";
import { carsRouter, userRouter } from "./routes";
import { HandleErrors } from "./errors/handleErrors.middleware";

export const app = express();
app.use(helmet());

app.use(json());

app.use("/cars", carsRouter);

app.use("/users", userRouter);

app.use(HandleErrors.execute);