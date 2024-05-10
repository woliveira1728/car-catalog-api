import "reflect-metadata";
import { carsCreateBodyListMock, updateCarBodyErrorMock, updateCarMock } from "../__mocks__/";
import { request, updateTaskBeforeEach } from "../utils/";
import { CarsServices } from "../../services/";

const carsService = new CarsServices;

describe("Integration test: update cars", () => {
    test("Should be able to update car successfully", async () => {
        
        const { user, token } = await updateTaskBeforeEach();
        
        const car = await carsService.createCar(carsCreateBodyListMock[0], user.id);

        const data = await request
            .patch(`/cars/${car.id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updateCarMock)
            .expect(200)
            .then((response) => response.body);

        const newCar = {...car, ...updateCarMock}
        expect(data).toStrictEqual(newCar);

    });

    test("Should throw error when car is invalid", async () => {

        const { token } = await updateTaskBeforeEach();

        const data = await request.patch("/cars/f9896743-ab54-b969-4a5d-32a2c360aaab")
            .set("Authorization", `Bearer ${token}`)
            .expect(404)
            .then(response => response.body);
        
        expect(data.error).toBe("Car not found.");

    });

    test("Should throw error when body is invalid", async () => {

        const { user, token } = await updateTaskBeforeEach();
        
        const car = await carsService.getManyCars(user.id);

        await request.patch(`/cars/${car[0].id}`)
            .set("Authorization", `Bearer ${token}`)
            .send(updateCarBodyErrorMock).expect(400)

    });
});