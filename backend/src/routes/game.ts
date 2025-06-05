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

routes.get('/game/:id', ensureAuthentication, gamesControllers.getById);

routes.put('/game/:id', ensureAuthentication, gamesControllers.updateById);

routes.delete('/game/:id', ensureAuthentication, gamesControllers.deleteById);

export { routes };
