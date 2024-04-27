import { Router } from "express";
import { ValidateRequest } from '../middleware/validateRequest.middleware';
import { createCarsBodySchema, updateCarsBodySchema } from "../schemas/cars.schemas";
import { CarsControllers } from "../controllers/cars.controllers";

export const carsRouter = Router();

const carsControllers = new CarsControllers();

carsRouter.post("/", ValidateRequest.execute({ body: createCarsBodySchema }), carsControllers.createCar);

carsRouter.get("/", carsControllers.getManyCars);

carsRouter.get("/:id", carsControllers.getOneCars);

carsRouter.patch("/:id", ValidateRequest.execute({ body: updateCarsBodySchema }), carsControllers.updateCars);

carsRouter.delete("/:id", carsControllers.deleteCars);