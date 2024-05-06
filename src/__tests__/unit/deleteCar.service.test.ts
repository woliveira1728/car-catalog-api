import "reflect-metadata";
import { CarsServices, UsersServices } from "../../services/";
import { carsCreateBodyListMock, createUser1Mock } from "../__mocks__/";

const carsService = new CarsServices;
const userServices = new UsersServices;

describe("Unit test: delete car", () => {
    
    test("Should be able to delete car successfully", async () => {

        const user = await userServices.register(createUser1Mock);

        await carsService.createCar(carsCreateBodyListMock[0], user.id);
        await carsService.createCar(carsCreateBodyListMock[1], user.id);

        const carsList1 = await carsService.getManyCars(user.id);
        
        await carsService.deleteCars(carsList1[1].id, user.id);
        
        const carsList2 = await carsService.getManyCars(user.id);

        expect(carsList2.length).toBe(1);

    });

});