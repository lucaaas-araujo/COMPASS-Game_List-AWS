import * as create from './create';
import * as remove from './delete';
import * as getAll from './getAll';
import * as update from './update';

export const categoryServices = {
  ...create,
  ...getAll,
  ...remove,
  ...update,
};
