import "reflect-metadata";
import { CarsServices, UsersServices } from "../../services/";
import { carsCreateBodyListMock, createUser1Mock } from "../__mocks__/";
import { carDefaultExpects } from "../utils/";

const carsService = new CarsServices;
const userServices = new UsersServices;

describe("Unit test: get one car", () => {
    
    test("Should be able to get a list car successfully", async () => {

        const user = await userServices.register(createUser1Mock);

        await carsService.createCar(carsCreateBodyListMock[0], user.id);
        const createCar = await carsService.createCar(carsCreateBodyListMock[1], user.id);

        const car = await carsService.getOneCars(createCar.id);

        carDefaultExpects(car, createCar);

    });

});