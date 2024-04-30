import "reflect-metadata";
import { CarsServices } from "../../services/cars.services";
import { carsCreateBodyListMock } from "../__mocks__/cars.mocks";

const carsService = new CarsServices;

describe("Unit test: delete car", () => {
    
    test("Should be able to delete car successfully", async () => {

        await carsService.createCar(carsCreateBodyListMock[0]);
        await carsService.createCar(carsCreateBodyListMock[1]);

        const carsList = await carsService.getManyCars();

        await carsService.deleteCars(carsList[1].id);

        expect(carsList.length).toBe(2);

    });

});