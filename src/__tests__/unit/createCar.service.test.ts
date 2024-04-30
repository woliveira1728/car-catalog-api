import "reflect-metadata";
import { CarsServices } from "../../services/cars.services";
import { createCarMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";

const carsService = new CarsServices;

describe("Unit test: create car", () => {
    
    test("Should be able to create car successfully", async () => {

        const car = await carsService.createCar(createCarMock);

        expect(car.id).toBeDefined();
        carDefaultExpects(car, createCarMock);

    });

});