import { TCar, TCreateCarsBodySchema, TUpdateCarsBodySchema } from "../schemas";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import { injectable } from "tsyringe";

@injectable()
export class CarsServices {

    public createCar = async ( body: TCreateCarsBodySchema, userId: string ): Promise<TCar> => {

        const data = await prisma.car.create({ data: { ...body, userId } });

        return data;

    }

    public getManyCars = async (userId: string): Promise<TCar[]> => {

        const data = await prisma.car.findMany({ where: { userId }});

        return data;

    }

    public getOneCars = async (id: string): Promise<TCar> => {

        const data = await prisma.car.findFirst({ where: { id } });

        if (!data) {
            throw new AppError(404, "Car not found.");
        }

        return data  as TCar;

    }

    public updateCars = async (id: string, body: TUpdateCarsBodySchema, userId: string): Promise<TCar> => {

        const isCarValid = await prisma.car.findFirst({ where: { id } });

        if (!isCarValid) {
            throw new AppError(404, "Car not found.");
        }

        if(isCarValid.userId != userId) {
            throw new AppError(403, "User must be the car owner");
        }

        const data = await prisma.car.update({ where: { id }, data: body });

        return data  as TCar;

    }

    public deleteCars = async (id: string, userId: string): Promise<void> => {

        const isCarValid = await prisma.car.findFirst({ where: { id } });

        if (!isCarValid) {
            throw new AppError(404, "Car not found.");
        }

        if(isCarValid.userId != userId) {
            throw new AppError(403, "User must be the car owner");
        }

        await prisma.car.delete({ where: { id }});

    }

}