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

routes.post('/game', ensureAuthentication, gamesControllers.create);

routes.put('/game/:id', ensureAuthentication, gamesControllers.update);

routes.delete('/game/:id', ensureAuthentication, gamesControllers.deletegame);

export { routes };
