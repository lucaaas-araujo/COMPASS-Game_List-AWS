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
routes.post('/categories', categoryController.create);
routes.put('/categories/:id', categoryController.update);
routes.delete('/categories/:id', categoryController.deleteCategory);

export { routes };
