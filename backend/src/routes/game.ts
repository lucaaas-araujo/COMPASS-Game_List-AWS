import { gamesControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.get(
  '/game/:user_id',
  gamesControllers.getAllValidator,
  gamesControllers.getAll,
);
routes.post('/game', gamesControllers.create);
routes.put('/game/:id', gamesControllers.update);
routes.delete('/game/:id', gamesControllers.deletegame);

export { routes };
