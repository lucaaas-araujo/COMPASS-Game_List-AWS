import { gamesControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.get('/game/getAll', gamesControllers.getAll);
routes.post('/game/create', gamesControllers.create);

export { routes };
