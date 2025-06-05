import * as countByUser from './countByUser';
import * as create from './create';
import * as deleteById from './delete';
import * as getAll from './getAll';
import * as updateById from './update';

export const platformServices = {
  ...create,
  ...getAll,
  ...updateById,
  ...deleteById,
  ...countByUser,
};
