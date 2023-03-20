import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { GetUsersService } from '@modules/users/services/GetUsersService';

jest.mock('@modules/users/services/GetUsersService');
const getUsersServiceMock = GetUsersService as jest.MockedClass<
  typeof GetUsersService
>;

describe('Get users controller test', () => {
  beforeAll(async () => {
    getUsersServiceMock.mockClear();
  });

  it('Should be able to get users', async () => {
    getUsersServiceMock.prototype.execute.mockResolvedValueOnce([new User()]);

    const response = await request(app).get(`/user`);

    expect(response.status).toEqual(200);
    expect(getUsersServiceMock).toHaveBeenCalled();
  });
});
