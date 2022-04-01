import { CreateKeyUseCase } from "./CreateKeyUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";

export class CreateKeyController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { key, user_id } = req.body;

    const createKeyUserCase = container.resolve(CreateKeyUseCase);

    await createKeyUserCase.execute({ key, user_id });

    return res.status(201).send();
  }
}
