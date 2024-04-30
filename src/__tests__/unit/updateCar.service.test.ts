import "reflect-metadata";
import { CarsServices } from "../../services/cars.services";
import { createCarMock, updateCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";


const carsService = new CarsServices;

describe("Unit test: update car", () => {
    
    test("Should be able to update a car successfully", async () => {

        const createCar = await carsService.createCar(createCarMock);

        const car = await carsService.updateCars(createCar.id, updateCarMock);

        const newCarUpdate = {...createCar, ...updateCarMock}

        carDefaultExpects(car, newCarUpdate);

    });

});