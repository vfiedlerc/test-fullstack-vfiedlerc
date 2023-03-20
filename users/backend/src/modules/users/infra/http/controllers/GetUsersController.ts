import { GetUsersService } from '@modules/users/services/GetUsersService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class GetUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const getUsersService = container.resolve(GetUsersService);

    const users = await getUsersService.execute();

    return response.json(users);
  }
}
