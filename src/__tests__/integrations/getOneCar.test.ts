import "reflect-metadata";
import { CarsServices } from "../../services";
import { carsCreateBodyListMock } from "../__mocks__/";
import { request, carDefaultExpects, updateTaskBeforeEach } from "../utils/";

const carsService = new CarsServices;

describe("Integration test: get one car", () => {

    test("should be able to get one car by id successfully", async () => {

        const { user, token } = await updateTaskBeforeEach();
        
        await carsService.createCar(carsCreateBodyListMock[0], user.id);
        const car = await carsService.createCar(carsCreateBodyListMock[1], user.id);

        const data = await request.get(`/cars/${car.id}`)
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .then(response => response.body);

        carDefaultExpects(data, carsCreateBodyListMock[1]);
    });

    test("Should throw error when car is invalid", async () => {

        const { token } = await updateTaskBeforeEach();

        const data = await request.get("/cars/f9896743-ab54-b969-4a5d-32a2c360aaab")
            .set("Authorization", `Bearer ${token}`)
            .expect(404)
            .then(response => response.body);
        
        expect(data.error).toBe("Car not found.");

    });

})