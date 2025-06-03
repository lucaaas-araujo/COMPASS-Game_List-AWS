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

routes.post('/platform', ensureAuthentication, platformControllers.create);

routes.put(
  '/platform/update/:id',
  ensureAuthentication,
  platformControllers.update,
);

routes.delete(
  '/platform/delete/:id',
  ensureAuthentication,
  platformControllers.remove,
);

export { routes };
