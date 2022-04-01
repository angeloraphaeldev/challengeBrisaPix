import { getRepository, Repository } from "typeorm";
import { IUsersRepository } from "../IUsersRepository";
import { CreateUserDTO } from "../../dtos/CreateUserDTO";
import { UsersEntity } from "../../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<UsersEntity>;

  constructor() {
    this.repository = getRepository(UsersEntity);
  }

  async create({ name, email, phone }: CreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      phone,
    });
    console.log({ name, email, phone });

    await this.repository.save(user);
  }
  async findByEmail(email: string): Promise<UsersEntity> {
    const user = this.repository.findOne({ email });
    return user;
  }
}

export { UsersRepository };
