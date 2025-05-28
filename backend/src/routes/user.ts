import { userControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.post('/register', userControllers.register);

export { routes };
