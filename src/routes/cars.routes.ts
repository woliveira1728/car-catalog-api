import { Router } from "express";
import { ValidateRequest } from '../middleware/validateRequest.middleware';
import { createCarsBodySchema, updateCarsBodySchema } from "../schemas/cars.schemas";
import { CarsControllers } from "../controllers/cars.controllers";
import { container } from "tsyringe";
import { CarsServices } from "../services/cars.services";

export const carsRouter = Router();

container.registerSingleton("CarsServices", CarsServices);
const carsControllers = container.resolve(CarsControllers);

carsRouter.post("/", ValidateRequest.execute({ body: createCarsBodySchema }), (req, res) => carsControllers.createCar (req, res));

carsRouter.get("/", (req, res) => carsControllers.getManyCars (req, res));

carsRouter.get("/:id", (req, res) => carsControllers.getOneCars (req, res));

carsRouter.patch("/:id", ValidateRequest.execute({ body: updateCarsBodySchema }), (req, res) => carsControllers.updateCars (req, res));

carsRouter.delete("/:id", (req, res) => carsControllers.deleteCars (req, res));