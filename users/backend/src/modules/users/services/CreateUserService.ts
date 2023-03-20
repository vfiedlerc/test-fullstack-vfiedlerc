import { inject, injectable } from 'tsyringe';
import bcrypt from 'bcryptjs';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../infra/typeorm/entities/User';
import { IUserRepository } from '../repositories/IUserRepository';

@injectable()
export class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    admin,
  }: ICreateUserDTO): Promise<User> {
    if (!name || !email || !password) {
      throw new Error('Missins params!');
    }

    const foundUser = await this.userRepository.findByEmail(email);

    if (foundUser) {
      throw new Error('User already exists!');
    }

    const salt = bcrypt.genSaltSync(8);
    const hash = bcrypt.hashSync(password, salt);

    return this.userRepository.create({
      name,
      email,
      password: hash,
      admin,
    });
  }
}
