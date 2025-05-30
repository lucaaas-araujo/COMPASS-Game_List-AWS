import { userControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.post(
  '/register',
  userControllers.registerValidation,
  userControllers.register,
);

routes.post('/login', userControllers.login);

export { routes };
