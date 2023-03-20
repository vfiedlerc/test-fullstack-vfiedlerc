import { inject, injectable } from 'tsyringe';
import { hash } from 'bcryptjs';
import { User } from '../infra/typeorm/entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class EditUserService {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({ name, id, email, password, admin }: User): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User not found');
    }

    if (name) {
      user.name = name;
    }

    if (email) {
      user.email = email;
    }

    if (password) {
      const hashedPassword = await hash(password, 8);

      user.password = hashedPassword;
    }

    if (admin) {
      user.admin = admin;
    }

    await this.usersRepository.update(user);

    return { ...user, password: '' };
  }
}
