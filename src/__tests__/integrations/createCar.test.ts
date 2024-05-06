import "reflect-metadata";
import { createCarErrorMock, createCarMock } from "../__mocks__/";
import { request, carDefaultExpects, generateAuthentication } from "../utils/";

describe("Integration test: create car", () => {
    
    test("Should be able to create car successfully", async () => {

        const { token } = await generateAuthentication();

        const data = await request.post("/cars")
            .set("Authorization", `Bearer ${token}`)
            .send(createCarMock)
            .expect(201)
            .then(response => response.body);

        expect(data.id).toBeDefined();
        carDefaultExpects(data, createCarMock);

    });

    test("Should throw error when body is invalid", async () => {

        const { token } = await generateAuthentication();

        await request.post("/cars")
            .set("Authorization", `Bearer ${token}`)
            .send(createCarErrorMock)
            .expect(400);

    });

})