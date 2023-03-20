import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { CreateUserService } from '@modules/users/services/CreateUserService';
import { User } from '@modules/users/infra/typeorm/entities/User';

jest.mock('@modules/users/services/CreateUserService');
const createUserServiceMock = CreateUserService as jest.MockedClass<
  typeof CreateUserService
>;

describe('Create user controller test', () => {
  beforeAll(async () => {
    createUserServiceMock.mockClear();
  });

  it('Should be able to create a user', async () => {
    createUserServiceMock.prototype.execute.mockResolvedValueOnce(new User());

    const name = 'test';
    const email = 'test@tes.com';
    const password = 'test';

    const response = await request(app)
      .post(`/user/create`)
      .send({ name, email, password });

    expect(response.status).toEqual(201);
    expect(createUserServiceMock).toHaveBeenCalled();
  });
});
