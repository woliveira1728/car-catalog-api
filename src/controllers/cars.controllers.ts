import { Request, Response } from "express";
import { CarsServices } from "../services/cars.services";


export class CarsControllers {

    carService = new CarsServices;

    public createCar = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carService.createCar(req.body);

        return res.status(201).json(response);
    }

    public getManyCars = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carService.getManyCars();

        return res.status(200).json(response);
    }

    public getOneCars = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carService.getOneCars(req.params.id);

        return res.status(200).json(response);
    }

    public updateCars = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carService.updateCars(req.params.id, req.body);

        return res.status(200).json(response);
    }

    public deleteCars = async (req: Request, res: Response): Promise<Response> => {

        const response = await this.carService.getOneCars(req.params.id);

        return res.status(204).json();
    }

}