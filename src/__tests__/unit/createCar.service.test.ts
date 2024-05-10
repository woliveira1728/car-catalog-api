import "reflect-metadata";
import { CarsServices, UsersServices } from "../../services/";
import { createCarMock, createUser1Mock } from "../__mocks__/";
import { carDefaultExpects } from "../utils/";

const carsService = new CarsServices;
const userServices = new UsersServices;

describe("Unit test: create car", () => {
    
    test("Should be able to create car successfully", async () => {

        const { id } = await userServices.register(createUser1Mock);

        const car = await carsService.createCar(createCarMock, id);

        expect(car.id).toBeDefined();
        carDefaultExpects(car, createCarMock);

    });

});