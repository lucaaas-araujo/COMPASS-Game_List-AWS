import * as create from './create';
import * as getAll from './getAll';
import * as update from './update';

export const gameServices = {
  ...create,
  ...getAll,
  ...update,
};
