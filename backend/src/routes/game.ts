import { create } from '@/controllers/games/create';
import { Router } from 'express';

const routes = Router();

routes.post('/games', create);

export { routes };
