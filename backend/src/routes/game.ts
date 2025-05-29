import { gamesControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.post('/', gamesControllers.register);

export { routes };
