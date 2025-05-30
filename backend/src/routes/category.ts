import { categoryController } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.post('/categories', categoryController.create);
routes.get('/categories/:user_id', categoryController.getAll);
routes.put('/categories/:id', categoryController.update);
routes.delete('/categories/:id', categoryController.deleteCategory);

export { routes };
