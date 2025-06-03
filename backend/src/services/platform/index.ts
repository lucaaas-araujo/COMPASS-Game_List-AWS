import * as create from './create';
import * as deleteFn from './delete';
import * as getAll from './getAll';
import * as update from './update';

export const platformServices = {
  ...create,
  ...update,
  ...deleteFn,
  ...getAll,
};
