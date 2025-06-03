import { gamesControllers } from '@/controllers';
import { ensureAuthentication } from '@/middleware/ensureAuthentication';
import { Router } from 'express';

const routes = Router();

routes.get(
  '/game',
  ensureAuthentication,
  gamesControllers.getAllValidator,
  gamesControllers.getAll,
);
routes.post('/game', gamesControllers.create);
routes.put('/game/:id', gamesControllers.update);
routes.delete('/game/:id', gamesControllers.deletegame);

export { routes };
