import * as create from './create';
import { getAll } from './getAll';

export const gamesControllers = {
  ...create,
  ...getAll,
};
