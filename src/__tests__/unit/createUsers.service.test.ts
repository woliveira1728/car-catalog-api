import "reflect-metadata";
import { UsersServices } from "../../services/";
import { createUser1Mock, createUser1ReturnMock } from "../__mocks__/";
import { userDefaultExpects } from "../utils/";

const userServices = new UsersServices;

describe("Unit test: create user", () => {
    
    test("Should be able to create a user account successfully", async () => {

        const user = await userServices.register(createUser1Mock);

        expect(user.id).toBeDefined();
        userDefaultExpects(user, createUser1ReturnMock);

    });

});