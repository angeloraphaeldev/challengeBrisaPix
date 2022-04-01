import { CreateUserDTO } from "../dtos/CreateUserDTO";
import { UsersEntity } from "../entities/User";

interface IUsersRepository {
  create(data: CreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<UsersEntity>;
}

export { IUsersRepository };
