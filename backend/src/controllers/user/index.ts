import * as login from './login';
import * as metadata from './metadata';
import * as register from './register';

export const userControllers = {
  ...register,
  ...login,
  ...metadata,
};
