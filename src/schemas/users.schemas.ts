import { z } from "zod";

export const usersSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    email: z.string().min(1),
    password: z.string().min(1)
})

export const createUserSchema = usersSchema.omit({ id: true });

export const createUserReturnSchema = usersSchema.omit({ password: true });

export const userLogin = usersSchema.omit({ id: true, name: true });

export type TUser = z.infer<typeof usersSchema>;

export type TUserCreate = z.infer<typeof createUserSchema>;

export type TUserCreateReturn = z.infer<typeof createUserReturnSchema>;

export type TUserLogin = z.infer<typeof userLogin>;

export type TUserLoginReturn = {
    accessToken: string,
    user: TUserCreateReturn
}