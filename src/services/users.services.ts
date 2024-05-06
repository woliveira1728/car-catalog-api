import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import { injectable } from "tsyringe";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TUserCreate, TUserCreateReturn, TUserLogin, TUserLoginReturn, createUserReturnSchema,  } from "../schemas";

@injectable()
export class UsersServices {

    async register(body: TUserCreate): Promise<TUserCreateReturn> {

        body.password = await bcrypt.hash(body.password, 10);

        const data = await prisma.user.create({ data: body });

        return createUserReturnSchema.parse(data);
    }

    async login(body: TUserLogin ): Promise<TUserLoginReturn> {

        const user = await prisma.user.findFirst({ where: { email: body.email } });

        if (!user) {
            throw new AppError(404, "User not registered");
        }

        const compare = await bcrypt.compare(body.password, user.password);

        if (!compare) {
            throw new AppError(401, "E-mail and password doesn't match");
        }

        const token = jwt.sign( { id: user.id }, process.env.JWT_SECRET! );

        return {
            accessToken: token,
            user: createUserReturnSchema.parse(user)
        };
    }

    async getUser( id: string ): Promise<TUserCreateReturn> {
        const user = await prisma.user.findFirst({ where: { id } });

        return createUserReturnSchema.parse(user);
    }

}