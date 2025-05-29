import * as create from './create';
import * as update from './update';
import * as deleteFn from './delete';

export const platformControllers = {
  ...create,
  ...update,
  ...deleteFn,
};
