import { Router } from "express";
import { ValidateRequest, VerifyToken } from '../middleware';
import { createCarsBodySchema, updateCarsBodySchema } from "../schemas";
import { CarsControllers } from "../controllers";
import { container } from "tsyringe";
import { CarsServices } from "../services";

export const carsRouter = Router();

container.registerSingleton("CarsServices", CarsServices);
const carsControllers = container.resolve(CarsControllers);

carsRouter.post("/", VerifyToken.execute, ValidateRequest.execute({ body: createCarsBodySchema }), (req, res) => carsControllers.createCar (req, res));

carsRouter.get("/", VerifyToken.execute, (req, res) => carsControllers.getManyCars (req, res));

carsRouter.get("/:id", VerifyToken.execute, (req, res) => carsControllers.getOneCars (req, res));

carsRouter.patch("/:id", VerifyToken.execute, ValidateRequest.execute({ body: updateCarsBodySchema }), (req, res) => carsControllers.updateCars (req, res));

carsRouter.delete("/:id", VerifyToken.execute, (req, res) => carsControllers.deleteCars (req, res));