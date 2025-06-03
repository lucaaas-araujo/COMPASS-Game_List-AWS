import { Router } from 'express';

import { platformControllers } from '@/controllers';
import { ensureAuthentication } from '@/middleware/ensureAuthentication';

const routes = Router();

routes.get(
  '/platform',
  ensureAuthentication,
  platformControllers.getAllValidator,
  platformControllers.getAll,
);
routes.post('/platform', platformControllers.create);
routes.put('/platform/update/:id', platformControllers.update);
routes.delete('/platform/delete/:id', platformControllers.remove);

export { routes };