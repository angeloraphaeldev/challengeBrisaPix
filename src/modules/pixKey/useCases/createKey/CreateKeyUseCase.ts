import { inject, injectable } from "tsyringe";
import { CreateKeyDTO } from "../../dtos/CreateKeyDTO";
import { IKeysRepository } from "../../repositories/IKeysRepositories";

@injectable()
export class CreateKeyUseCase {
  constructor(
    @inject("KeysRepository")
    private keysRepository: IKeysRepository
  ) {}
  async execute({ key, user_id }: CreateKeyDTO): Promise<void> {
    const countKeys = await this.keysRepository.countKeyPix(user_id);

    if (countKeys === 3) {
      throw new Error("User reached maximum key limit");
    }

    const keyAlreadyExists = await this.keysRepository.findByKey(key, user_id);

    if (keyAlreadyExists) {
      throw new Error("Key Already Exists for user");
    }

    await this.keysRepository.create({
      key,
      user_id,
    });
  }
}
