import { z } from "zod";

export const carsSchema = z.object({
    id: z.string(),
    name: z.string().min(1),
    description: z.string().nullish(),
    brand: z.string(),
    year: z.number().positive(),
    km: z.number().positive()
});

export const createCarsBodySchema = carsSchema.omit({ id: true });

export const updateCarsBodySchema = carsSchema.omit({ id: true }).partial();

export type TCar = z.infer<typeof carsSchema>;

export type TCreateCarsBodySchema = z.infer<typeof createCarsBodySchema>;

export type TUpdateCarsBodySchema = z.infer<typeof updateCarsBodySchema>;