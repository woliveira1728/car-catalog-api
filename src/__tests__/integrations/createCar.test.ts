import { createCarErrorMock, createCarMock } from "../__mocks__/cars.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request"

describe("Integration test: create car", () => {
    
    test("Should be able to create car successfully", async () => {

        const data = await request.post("/cars")
            .send(createCarMock)
            .expect(201)
            .then(response => response.body);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, createCarMock);

    });

    test("Should throw error when body is invalid", async () => {

        await request.post("/cars").send(createCarErrorMock).expect(400);

    });

})