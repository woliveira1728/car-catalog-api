import { prisma } from "../../database/prisma";
import { carsCreateBodyListMock } from "../__mocks__/cars.mocks";
import { carDefaultExpects } from "../utils/carDefaultExpects";
import { request } from "../utils/request";


describe("Integration test: get many cars", () => {
    test("should be able to get many cars successfully", async () => {

        await prisma.car.createMany({ data: carsCreateBodyListMock});

        const data = await request.get("/cars").expect(200).then(response => response.body);

        expect(data).toHaveLength(2);
        
        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], carsCreateBodyListMock[0]);

        expect(data[1].id).toBeDefined();
        carDefaultExpects(data[1], carsCreateBodyListMock[1]);
    })
})