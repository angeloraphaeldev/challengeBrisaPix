import { Router } from "express";
import { CreateKeyController } from "../modules/pixKey/useCases/createKey/CreateKeyController";

const keysRouter = Router();

const createKeyController = new CreateKeyController();

keysRouter.post("/", createKeyController.handle);

export { keysRouter };
