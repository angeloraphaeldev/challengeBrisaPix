import { container } from 'tsyringe';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import { UsersRepository } from '../../modules/users/repositories/implementations/UsersRepository';
import { IKeysRepository } from '../../modules/pixKey/repositories/IKeysRepositories';
import { KeysRepository } from '../../modules/pixKey/repositories/implementations/KeysRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IKeysRepository>('KeysRepository', KeysRepository);
