import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

class CreateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, phone } = req.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name,
      email,
      phone,
    });

    return res.status(201).send();
  }
}

export { CreateUserController };
