import { TUserCreateReturn, TUserLoginReturn } from "../../schemas";
import { TCar, TCreateCarsBodySchema } from "../../schemas/cars.schemas";
import { TUserDefaultExpect } from "../__mocks__/users.mocks";

export const carDefaultExpects = (data: TCar, expectData: TCreateCarsBodySchema) => {
    expect(data.name).toBe(expectData.name);
    expect(data.description).toBe(expectData.description);
    expect(data.brand).toBe(expectData.brand);
    expect(data.year).toBe(expectData.year);
    expect(data.km).toBe(expectData.km);
};

export const userDefaultExpects = (data: TUserCreateReturn, expectData: TUserDefaultExpect) => {
    expect(data.name).toBe(expectData.name);
    expect(data.email).toBe(expectData.email);
}