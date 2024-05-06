import "reflect-metadata";
import { CarsServices, UsersServices } from "../../services/";
import { createCarMock, updateCarMock, createUser1Mock } from "../__mocks__/";
import { carDefaultExpects } from "../utils/";


const carsService = new CarsServices;
const userServices = new UsersServices;

describe("Unit test: update car", () => {
    
    test("Should be able to update a car successfully", async () => {

        const user = await userServices.register(createUser1Mock);        

        const createCar = await carsService.createCar(createCarMock, user.id);

        const car = await carsService.updateCars(createCar.id, updateCarMock, user.id);

        const newCarUpdate = {...createCar, ...updateCarMock}

        carDefaultExpects(car, newCarUpdate);

    });

});