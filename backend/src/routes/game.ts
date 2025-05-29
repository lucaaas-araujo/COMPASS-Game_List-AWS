import { create } from '@/controllers/game/create';
import { getAll } from '@/controllers/game/getAll';
import { Router } from 'express';

const routes = Router();

routes.get('/game', getAll);
routes.post('/game', create);

export { routes };
