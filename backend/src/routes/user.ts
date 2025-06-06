import { userControllers } from '@/controllers';
import { ensureAuthentication } from '@/middleware/ensureAuthentication';
import { Router } from 'express';

const routes = Router();

routes.post(
  '/register',
  userControllers.registerValidation,
  userControllers.register,
);

routes.post('/login', userControllers.login);

routes.get('/summary', ensureAuthentication, userControllers.summary);

export { routes };
