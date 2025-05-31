import * as create from './register';
import * as login from './login';

export const authServices = {
  ...create,
  ...login,
};
