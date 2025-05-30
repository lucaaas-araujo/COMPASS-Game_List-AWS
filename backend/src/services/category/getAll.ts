import Category from '@/models/category';

type GetAllCategoryProps = {
  user_id: string;
  is_deleted?: boolean;
};

export const getAll = async ({ user_id, is_deleted }: GetAllCategoryProps) => {
  try {
    const filter: any = { user_id };
    if (typeof is_deleted === 'boolean') {
      filter.is_deleted = is_deleted;
    }
    const categories = await Category.find(filter);
    if (!categories || categories.length === 0) {
      return new Error();
    }
    return categories;
  } catch (error) {
    return new Error('Error returning categories');
  }
};
