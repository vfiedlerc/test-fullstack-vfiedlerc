import { EditUserService } from '@modules/users/services/EditUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class EditUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const editUserService = container.resolve(EditUserService);

    const userEdit = request.body;

    const user = await editUserService.execute(userEdit);

    return response.status(201).json(user);
  }
}
