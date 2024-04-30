import { prisma } from "../../database/prisma";
import { createCarMock, updateCarBodyErrorMock, updateCarMock } from "../__mocks__/cars.mocks";
import { request } from "../utils/request";


describe("Integration test: update cars", () => {
    test("Should be able to update car successfully", async () => {
        
        const car = await prisma.car.create({ data: createCarMock });

        const data = await request
            .patch(`/cars/${car.id}`)
            .send(updateCarMock)
            .expect(200)
            .then((response) => response.body);

        const newCar = {...car, ...updateCarMock}
        expect(data).toStrictEqual(newCar);

    });

    test("Should throw error when car is invalid", async () => {

        const data = await request.patch("/cars/f9896743-ab54-b969-4a5d-32a2c360aaab")
            .expect(404)
            .then(response => response.body);
        
        expect(data.error).toBe("Car not found.");

    });

    test("Should throw error when body is invalid", async () => {

        const car = await prisma.car.create({ data: createCarMock });

        await request.patch(`/cars/${car.id}`).send(updateCarBodyErrorMock).expect(400)

    });
});