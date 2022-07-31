import { Router } from "express";
import { DogController } from "../Controller/DogController";

export const dogRouter = Router();

const dogController = new DogController()

dogRouter.post('/createWalk', dogController.createWalk)