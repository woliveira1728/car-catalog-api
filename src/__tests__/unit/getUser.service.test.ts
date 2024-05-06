import "reflect-metadata";
import { UsersServices } from "../../services/";
import { createUser1Mock, createUser1ReturnMock, loginUser1Mock } from "../__mocks__/";
import { userDefaultExpects } from "../utils/";

const userServices = new UsersServices;

describe("Unit test: get user", () => {
    
    test("Should be able to get user account successfully", async () => {

        await userServices.register(createUser1Mock);

        const { user } = await userServices.login(loginUser1Mock);

        const getUser = await userServices.getUser(user.id);

        expect(user.id).toBeDefined();
        userDefaultExpects(user, createUser1ReturnMock);

    });

});