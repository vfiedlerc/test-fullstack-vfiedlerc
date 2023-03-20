import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { DeleteUserService } from '@modules/users/services/DeleteUserService';

jest.mock('@modules/users/services/DeleteUserService');
const deleteUserServiceMock = DeleteUserService as jest.MockedClass<
  typeof DeleteUserService
>;

describe('Delete user controller test', () => {
  beforeAll(async () => {
    deleteUserServiceMock.mockClear();
  });

  it('Should be able to delete a user', async () => {
    deleteUserServiceMock.prototype.execute.mockResolvedValueOnce();

    const response = await request(app).delete(`/user/${'id'}`);

    expect(response.status).toEqual(204);
    expect(deleteUserServiceMock).toHaveBeenCalled();
  });
});
