import "reflect-metadata";
import { UsersServices } from "../../services";
import { createUser1Mock, createUser1ReturnMock, createUserBodyErrorMock, loginUser1Mock, loginUser1MockError } from "../__mocks__/";
import { request, userDefaultExpects } from "../utils/";

const userServices = new UsersServices;

describe("Integration test: user login", () => {
    
    test("Should be able to login account successfully", async () => {

        await userServices.register(createUser1Mock);

        const data = await request.post("/users/login")
            .send(loginUser1Mock)
            .expect(200)
            .then(response => response.body);

        userDefaultExpects(data.user, createUser1ReturnMock);

    });

    test("Should throw error when body is invalid", async () => {

        await request.post("/users/login").send(createUserBodyErrorMock).expect(400);

    });

    test("Should be throw error when user not found", async () => {

        const data = await request.post("/users/login")
            .send(loginUser1Mock)
            .expect(404)
            .then(response => response.body);

        expect(data.error).toEqual("User not registered");

    });

    test("Should be throw error when email and password doesn't match", async () => {

        await userServices.register(createUser1Mock);

        const data = await request.post("/users/login")
            .send(loginUser1MockError)
            .expect(401)
            .then(response => response.body);

        expect(data.error).toEqual("E-mail and password doesn't match");

    });

});