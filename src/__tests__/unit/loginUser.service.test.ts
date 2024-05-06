import "reflect-metadata";
import { UsersServices } from "../../services/";
import { createUser1Mock, createUser1ReturnMock, loginUser1Mock } from "../__mocks__/";
import { userDefaultExpects } from "../utils/";

const userServices = new UsersServices;

describe("Unit test: user login", () => {
    
    test("Should be able to login account successfully", async () => {

        await userServices.register(createUser1Mock);

        const { accessToken, user } = await userServices.login(loginUser1Mock);

        expect(accessToken).toBeDefined();
        expect(user.id).toBeDefined();
        userDefaultExpects(user, createUser1ReturnMock);

    });

});