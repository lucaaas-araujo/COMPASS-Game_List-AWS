import * as create from './create';
import * as get from './getAll';
import * as update from './update';
import * as deleteCategory from './delete'; // delete is a reserved keyword in JavaScript, so we rename it to deleteCategory

export const categoryService = {
  ...create,
  ...get,
  ...update,
  ...deleteCategory,
};
