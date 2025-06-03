import { categoryController } from '@/controllers';
import { ensureAuthentication } from '@/middleware/ensureAuthentication';
import { Router } from 'express';

const routes = Router();

routes.get(
  '/categories',
  ensureAuthentication,
  categoryController.getAllValidator,
  categoryController.getAll,
);

routes.post('/categories', ensureAuthentication, categoryController.create);

routes.put('/categories/:id', ensureAuthentication, categoryController.update);

routes.delete(
  '/categories/:id',
  ensureAuthentication,
  categoryController.deleteCategory,
);

export { routes };
