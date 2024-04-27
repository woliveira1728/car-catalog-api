import { TCar, TCreateCarsBodySchema, TUpdateCarsBodySchema } from "../schemas/cars.schemas";
import { prisma } from "../database/prisma";
import { AppError } from "../errors/appError";
import { injectable } from "tsyringe";

@injectable()
export class CarsServices {

    public createCar = async ( body: TCreateCarsBodySchema ): Promise<TCar> => {

        const data = await prisma.car.create({ data: body });

        return data;

    }

    public getManyCars = async (): Promise<TCar[]> => {

        const data = await prisma.car.findMany();

        return data;

    }

    public getOneCars = async (id: string): Promise<TCar> => {

        const data = await prisma.car.findFirst({ where: { id } });

        if (!data) {
            throw new AppError(404, "Car not found.");
        }

        return data  as TCar;

    }

    public updateCars = async (id: string, body: TUpdateCarsBodySchema): Promise<TCar> => {

        const isCarValid = await prisma.car.findFirst({ where: { id } });

        if (!isCarValid) {
            throw new AppError(404, "Car not found.");
        }

        const data = await prisma.car.update({ where: { id }, data: body });

        return data  as TCar;

    }

    public deleteCars = async (id: string): Promise<void> => {

        const isCarValid = await prisma.car.findFirst({ where: { id } });

        if (!isCarValid) {
            throw new AppError(404, "Car not found.");
        }

        await prisma.car.delete({ where: { id }});

    }

}