import { Router } from "express";
import { container } from "tsyringe";
import { UsersServices } from "../services";
import { UsersControllers } from "../controllers";
import { IsEmailAlready, ValidateRequest, VerifyToken } from "../middleware";
import { createUserSchema, userLogin } from "../schemas";

export const userRouter = Router();

container.registerSingleton("UsersServices", UsersServices);
const userController = container.resolve(UsersControllers);

userRouter.post("/", ValidateRequest.execute({ body: createUserSchema }), IsEmailAlready.execute, (req, res) => userController.register (req, res));

userRouter.post("/login", ValidateRequest.execute({ body: userLogin }), (req, res) => userController.login (req, res));

userRouter.get("/profile", VerifyToken.execute, (req, res) => userController.getUser (req, res));