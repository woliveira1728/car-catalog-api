import { Request, Response } from "express";
import { CarsServices } from "../services";
import { inject, injectable } from "tsyringe";

@injectable()
export class CarsControllers {

    constructor(@inject("CarsServices") private carsService: CarsServices){};

    public createCar = async (req: Request, res: Response): Promise<Response> => {

        const { id } = res.locals;

        const response = await this.carsService.createCar(req.body, id);

        return res.status(201).json(response);
    }

    public getManyCars = async (req: Request, res: Response): Promise<Response> => {

        const userId = res.locals.id;

        const response = await this.carsService.getManyCars(userId);

        return res.status(200).json(response);
    }

    public getOneCars = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carsService.getOneCars(req.params.id);

        return res.status(200).json(response);
    }

    public updateCars = async (req: Request, res: Response): Promise<Response> => {

        const userId = res.locals.id;

        const response = await this.carsService.updateCars(req.params.id, req.body, userId);

        return res.status(200).json(response);
    }

    public deleteCars = async (req: Request, res: Response): Promise<Response> => {

        const userId = res.locals.id;

        const response = await this.carsService.deleteCars(req.params.id, userId);

        return res.status(204).json();
    }

}