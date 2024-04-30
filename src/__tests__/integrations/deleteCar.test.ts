import { prisma } from "../../database/prisma";
import { createCarMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";


describe("Integration test: delete cars", () => {
    
    test("Should be able to delete a car successfully", async () => {
        
        const car = await prisma.car.create({ data: createCarMock });

        await request.delete(`/cars/${car.id}`).expect(204);

    });

    test("Should throw error when car is invalid", async () => {

        const data = await request.delete("/cars/f9896743-ab54-b969-4a5d-32a2c360aaab")
            .expect(404)
            .then(response => response.body);
        
        expect(data.error).toBe("Car not found.");

    });

});