import "reflect-metadata";
import { carsCreateBodyListMock } from "../__mocks__/";
import { request, carDefaultExpects, updateTaskBeforeEach } from "../utils/";
import { CarsServices } from "../../services";

const carsService = new CarsServices;

describe("Integration test: get many cars", () => {
    test("should be able to get many cars successfully", async () => {

        const { token } = await updateTaskBeforeEach();

        const data = await request.get("/cars")
            .set("Authorization", `Bearer ${token}`)
            .expect(200)
            .then(response => response.body);

        expect(data).toHaveLength(2);
        
        expect(data[0].id).toBeDefined();
        carDefaultExpects(data[0], carsCreateBodyListMock[0]);

    })
})