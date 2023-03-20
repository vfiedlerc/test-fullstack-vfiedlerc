import { ICreateUserDTO } from '@modules/users/dtos/ICreateUserDTO';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { IUserRepository } from '@modules/users/repositories/IUserRepository';
import { v4 as uuidV4 } from 'uuid';

export class FakeUserRepository implements IUserRepository {
  private fakeRepository: User[];

  constructor() {
    this.fakeRepository = [];
  }

  async create(new_user: ICreateUserDTO): Promise<User> {
    const newUser = new User();

    Object.assign(newUser, new_user);

    newUser.id = uuidV4();

    if (!newUser.created_at) {
      newUser.created_at = new Date();
    }

    if (!newUser.updated_at) {
      newUser.updated_at = new Date();
    }

    this.fakeRepository.push(newUser);

    return newUser;
  }

  async update(user: User): Promise<User> {
    const oldUser = this.fakeRepository.find(
      foundUser => foundUser.id === user.id,
    );

    if (oldUser) {
      Object.assign(oldUser, user);
    } else {
      this.fakeRepository.push(user);
    }

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    return this.fakeRepository.find(item => item.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.fakeRepository.find(item => item.id === id);
  }

  async findAll(): Promise<User[]> {
    return this.fakeRepository;
  }

  async delete(user: User): Promise<void> {
    this.fakeRepository.filter(findUser => findUser.id !== user.id);
  }
}
