import { platformControllers } from '@/controllers/platform';
import { Router } from 'express';

const routes = Router();

routes.post('/', platformControllers.create);
routes.put('/:id', platformControllers.update);
routes.delete('/:id', platformControllers.remove);
routes.get('/platforms', platformControllers.getAll);       
routes.get('/platforms/:id', platformControllers.getById);   

export { routes };