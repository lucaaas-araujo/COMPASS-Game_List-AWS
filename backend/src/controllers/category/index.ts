import * as create from './create';
import * as getAll from './getAll';
import * as update from './update';
import * as deleteCategory from './delete';

export const categoryController = {
  ...create,
  ...getAll,
  ...update,
  ...deleteCategory,
};
