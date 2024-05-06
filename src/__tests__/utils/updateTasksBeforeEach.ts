import { CarsServices } from "../../services";
import { carsCreateBodyListMock } from "../__mocks__/cars.mocks";
import { createUser2Mock } from "../__mocks__/users.mocks";
import { generateAuthentication } from "./generateAuthentication";

const carsService = new CarsServices;

export const updateTaskBeforeEach = async () => {
    const { user: user1, token: token1 } = await generateAuthentication();
  
    await carsService.createCar(carsCreateBodyListMock[0], user1.id);
    await carsService.createCar(carsCreateBodyListMock[1], user1.id);
  
    const { token: token2 } = await generateAuthentication(createUser2Mock);
  
    return { user: user1, token: token1, secondToken: token2 };
};