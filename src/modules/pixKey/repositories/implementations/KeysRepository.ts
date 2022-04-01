import { getRepository, Repository } from "typeorm";
import { CreateKeyDTO } from "../../dtos/CreateKeyDTO";
import { KeysEntity } from "../../entities/key.entity";
import { IKeysRepository } from "../IKeysRepositories";

class KeysRepository implements IKeysRepository {
  private repository: Repository<KeysEntity>;

  constructor() {
    this.repository = getRepository(KeysEntity);
  }

  async create({ key, user_id }: CreateKeyDTO): Promise<void> {
    const keySaved = this.repository.create({
      key,
      user_id,
    });

    await this.repository.save(keySaved);
  }

  async findByKey(keyPix: string, user_id: string): Promise<KeysEntity> {
    const key = await this.repository.findOne({
      where: { key: keyPix, user_id },
    });
    return key;
  }

  async countKeyPix(user_id: string): Promise<number> {
    const [, count] = await this.repository.findAndCount({
      where: { user_id },
    });

    return count;
  }
}

export { KeysRepository };
