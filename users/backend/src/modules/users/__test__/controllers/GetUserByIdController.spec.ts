import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { GetUserByIdService } from '@modules/users/services/GetUserByIdService';

jest.mock('@modules/users/services/GetUserByIdService');
const getUserByIdServiceMock = GetUserByIdService as jest.MockedClass<
  typeof GetUserByIdService
>;

describe('Get user by id controller test', () => {
  beforeAll(async () => {
    getUserByIdServiceMock.mockClear();
  });

  it('Should be able to get user by id', async () => {
    getUserByIdServiceMock.prototype.execute.mockResolvedValueOnce(new User());

    const response = await request(app).get(`/user/id`);

    expect(response.status).toEqual(200);
    expect(getUserByIdServiceMock).toHaveBeenCalled();
  });
});
