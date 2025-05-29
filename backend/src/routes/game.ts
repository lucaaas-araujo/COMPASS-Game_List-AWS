import { gamesControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.get('/game', gamesControllers.getAll);
routes.post('/game', gamesControllers.create);
routes.put('/game/:id', gamesControllers.update);

export { routes };
