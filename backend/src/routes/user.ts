import { userControllers } from '@/controllers';
import { Router } from 'express';

const routes = Router();

routes.post(
  '/register',
  userControllers.registerValidation,
  userControllers.register,
);

export { routes };
