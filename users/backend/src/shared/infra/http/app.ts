import 'express-async-errors';
import express, {
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from 'express';
import cors from 'cors';
import routes from './routes/index';

const app = express();

app.use(cors({ origin: '*' }));

app.use(express.json() as RequestHandler);

app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof Error) {
    return response.status(400).json({ message: err.message, status: 400 });
  }

  return response
    .status(500)
    .json({ message: 'Internal server error', status: 500 });
});

export { app };
