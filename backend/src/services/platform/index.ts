import * as create from './create';
import * as update from './update';
import * as deleteFn from './delete';


export const platformServices = {
  ...create,
  ...update,
  ...deleteFn,
};
