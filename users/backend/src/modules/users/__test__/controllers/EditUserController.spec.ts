import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { EditUserService } from '@modules/users/services/EditUserService';

jest.mock('@modules/users/services/EditUserService');
const editUserServiceMock = EditUserService as jest.MockedClass<
  typeof EditUserService
>;

describe('Edit user controller test', () => {
  beforeAll(async () => {
    editUserServiceMock.mockClear();
  });

  it('Should be able to edit a user', async () => {
    editUserServiceMock.prototype.execute.mockResolvedValueOnce(new User());

    const user = {} as User;

    const response = await request(app).patch(`/user/edit`).send(user);

    expect(response.status).toEqual(201);
    expect(editUserServiceMock).toHaveBeenCalled();
  });
});
