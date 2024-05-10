import { z } from "zod"
import { usersSchema } from "../../schemas"

export const createUser1Mock = {
    name: "John Doe",
    email: "johndoe@email.com",
    password: "12345678"
}

export const createUser2Mock = {
    name: "John Doe2",
    email: "johndoe2@email.com",
    password: "12345678"
}

export const createUser1ReturnMock = {
    name: "John Doe",
    email: "johndoe@email.com"
}

export const createUserBodyErrorMock = {
    email: "johndoe@email.com"
}

export const userDefaultExpec = usersSchema.omit({ id:true, password: true });
export type TUserDefaultExpect = z.infer<typeof userDefaultExpec>;

export const loginUser1Mock = {
    email: "johndoe@email.com",
    password: "12345678"
}

export const loginUser1MockError = {
    email: "johndoe@email.com",
    password: "128444445678"
}

export const loginUser2Mock = {
    email: "johndoe2@email.com",
    password: "12345678"
}


