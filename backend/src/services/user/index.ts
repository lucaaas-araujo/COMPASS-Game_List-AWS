import * as login from './login';
import * as metadata from './metadata';
import * as register from './register';

export const userServices = {
  ...register,
  ...login,
  ...metadata,
};
