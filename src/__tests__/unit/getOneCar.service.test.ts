import "reflect-metadata";
import { CarsServices } from "../../services/cars.services";
import { carsCreateBodyListMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";

const carsService = new CarsServices;

describe("Unit test: get one car", () => {
    
    test("Should be able to get a list car successfully", async () => {

        await carsService.createCar(carsCreateBodyListMock[0]);
        const createCar = await carsService.createCar(carsCreateBodyListMock[1]);

        const car = await carsService.getOneCars(createCar.id);

        carDefaultExpects(car, createCar);

    });

});