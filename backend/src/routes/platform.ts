import { platformControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.post('/platform/create', platformControllers.create);
routes.put('/platform/update/:id', platformControllers.update);
routes.delete('/platform/delete/:id', platformControllers.remove);

export { routes };