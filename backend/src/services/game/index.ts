import * as create from './create';
import * as getAll from './getAll';
import * as update from './update';
import * as deletegame from './delete';

export const gameServices = {
  ...create,
  ...getAll,
  ...update,
  ...deletegame,
};
