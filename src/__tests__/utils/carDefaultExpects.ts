import { TCar, TCreateCarsBodySchema } from "../../schemas/cars.schemas";

export const carDefaultExpects = (data: TCar, expectData: TCreateCarsBodySchema) => {
    expect(data.name).toBe(expectData.name);
    expect(data.description).toBe(expectData.description);
    expect(data.brand).toBe(expectData.brand);
    expect(data.year).toBe(expectData.year);
    expect(data.km).toBe(expectData.km);
};