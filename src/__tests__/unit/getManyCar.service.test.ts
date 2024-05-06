import "reflect-metadata";
import { CarsServices, UsersServices } from "../../services/";
import { carsCreateBodyListMock, createUser1Mock, createUser2Mock } from "../__mocks__/";

const carsService = new CarsServices;
const userServices = new UsersServices;

describe("Unit test: get many car", () => {
    
    test("Should be able to get a list car successfully", async () => {

        const user = await userServices.register(createUser1Mock);
        const user2 = await userServices.register(createUser2Mock);

        await carsService.createCar(carsCreateBodyListMock[0], user.id);
        await carsService.createCar(carsCreateBodyListMock[1], user.id);

        const carsList = await carsService.getManyCars(user.id);
        const carsList2 = await carsService.getManyCars(user2.id);

        expect(carsList.length).toBe(2);
        expect(carsList2.length).toBe(0);

    });

});