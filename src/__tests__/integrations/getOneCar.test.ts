import { prisma } from "../../database/prisma";
import { carsCreateBodyListMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";


describe("Integration test: get one car", () => {

    test("should be able to get one car by id successfully", async () => {

        const car = await prisma.car.create({ data: carsCreateBodyListMock[1] });

        const data = await request.get(`/cars/${car.id}`)
            .expect(200)
            .then(response => response.body);

        carDefaultExpects(data, carsCreateBodyListMock[1]);
    });

    test("Should throw error when car is invalid", async () => {

        const data = await request.get("/cars/f9896743-ab54-b969-4a5d-32a2c360aaab")
            .expect(404)
            .then(response => response.body);
        
        expect(data.error).toBe("Car not found.");

    });

})