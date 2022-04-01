import { KeysEntity } from "../entities/key.entity";
import { CreateKeyDTO } from "../dtos/CreateKeyDTO";

interface IKeysRepository {
  create(data: CreateKeyDTO): Promise<void>;
  findByKey(key: string, user_id: string): Promise<KeysEntity>;
  countKeyPix(user_id: string): Promise<number>;
}

export { IKeysRepository };
