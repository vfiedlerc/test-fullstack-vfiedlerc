import { app } from '@shared/infra/http/app';
import request from 'supertest';
import { User } from '@modules/users/infra/typeorm/entities/User';
import { SessionService } from '@modules/users/services/SessionService';

jest.mock('@modules/users/services/SessionService');
const sessionServiceMock = SessionService as jest.MockedClass<
  typeof SessionService
>;

describe('Session controller test', () => {
  beforeAll(async () => {
    sessionServiceMock.mockClear();
  });

  it('Should be able to get users', async () => {
    sessionServiceMock.prototype.execute.mockResolvedValueOnce({
      user: new User(),
      token: '',
    });

    const response = await request(app)
      .post(`/user/session`)
      .send({ email: 'test@test.com', password: '1234' });

    expect(response.status).toEqual(200);
    expect(sessionServiceMock).toHaveBeenCalled();
  });
});
