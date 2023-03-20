import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { DeleteUserController } from '../controllers/DeleteUserController';
import { EditUserController } from '../controllers/EditUserController';
import { GetUserByIdController } from '../controllers/GetUserByIdController';
import { GetUsersController } from '../controllers/GetUsersController';
import { SessionController } from '../controllers/SessionController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const editUserController = new EditUserController();
const sessionController = new SessionController();
const getUserByIdController = new GetUserByIdController();
const getUsersController = new GetUsersController();

userRoutes.post('/create', createUserController.handle);
userRoutes.delete('/:id', deleteUserController.handle);
userRoutes.patch('/edit', editUserController.handle);
userRoutes.post('/session', sessionController.handle);
userRoutes.get('/:id', getUserByIdController.handle);
userRoutes.get('/', getUsersController.handle);

export default userRoutes;
