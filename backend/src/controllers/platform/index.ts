import * as create from './create';
import * as update from './update';
import * as deleteFn from './delete';
import * as getAll from './getAll';
import * as getById from './getById';

export const platformControllers = {
  ...create,
  ...update,
  ...deleteFn,
  ...getAll,
  ...getById,
};
