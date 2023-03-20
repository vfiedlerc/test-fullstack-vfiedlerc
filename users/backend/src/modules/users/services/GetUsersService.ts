import { inject, injectable } from 'tsyringe';
import { User } from '../infra/typeorm/entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class GetUsersService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute(): Promise<User[]> {
    return this.usersRepository.findAll();
  }
}
