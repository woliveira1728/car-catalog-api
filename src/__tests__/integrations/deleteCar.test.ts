import "reflect-metadata";
import { prisma } from "../../database/prisma";
import { carsCreateBodyListMock, createCarMock } from "../__mocks__/";
import { request, updateTaskBeforeEach } from "../utils/";
import { CarsServices } from "../../services";

const carsService = new CarsServices;

describe("Integration test: delete cars", () => {
    
    test("Should be able to delete a car successfully", async () => {

        const { user, token } = await updateTaskBeforeEach();
        
        const car = await carsService.createCar(carsCreateBodyListMock[0], user.id);

        await request.delete(`/cars/${car.id}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(204);

    });

    test("Should throw error when car is invalid", async () => {

        const { token } = await updateTaskBeforeEach();

        const data = await request.delete("/cars/f9896743-ab54-b969-4a5d-32a2c360aaab")
            .set("Authorization", `Bearer ${token}`)
            .expect(404)
            .then(response => response.body);
        
        expect(data.error).toBe("Car not found.");

    });

});