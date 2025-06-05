import * as create from './create';
import * as deleteById from './delete';
import * as favorite from './favorite';
import * as getAll from './getAll';
import * as updateById from './update';

export const gamesControllers = {
  ...create,
  ...getAll,
  ...updateById,
  ...deleteById,
  ...favorite,
};
