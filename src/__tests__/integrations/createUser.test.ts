import { createUser1Mock, createUserBodyErrorMock } from "../__mocks__/";
import { request, userDefaultExpects } from "../utils/";

describe("Integration test: create user", () => {
    
    test("Should be able to register user successfully", async () => {

        const data = await request.post("/users")
            .send(createUser1Mock)
            .expect(201)
            .then(response => response.body);

        expect(data.id).toBeDefined();
        userDefaultExpects(data, createUser1Mock);

    });

    test("Should throw error when body is invalid", async () => {

        await request.post("/users").send(createUserBodyErrorMock).expect(400);

    });

    test("Should be able to register user successfully", async () => {

        await request.post("/users")
            .send(createUser1Mock)
            .expect(201)
            .then(response => response.body);

        const data = await request.post("/users")
            .send(createUser1Mock)
            .expect(409)
            .then(response => response.body);

        expect(data.error).toEqual("E-mail already registered");
        
    });

});