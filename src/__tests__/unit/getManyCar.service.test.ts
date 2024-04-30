import "reflect-metadata";
import { CarsServices } from "../../services/cars.services";
import { carsCreateBodyListMock } from "../__mocks__/cars.mocks";

const carsService = new CarsServices;

describe("Unit test: get many car", () => {
    
    test("Should be able to get a list car successfully", async () => {

        await carsService.createCar(carsCreateBodyListMock[0]);
        await carsService.createCar(carsCreateBodyListMock[1]);

        const carsList = await carsService.getManyCars();

        expect(carsList.length).toBe(2);

    });

});