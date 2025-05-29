// delete category service
import Category from '@/models/category';

type DeleteCategoryProps = {
  id: string;
  is_deleted?: boolean;
};

export const deleteCategory = async ({
  id,
  is_deleted,
}: DeleteCategoryProps) => {
  try {
    const category = await Category.findById(id);
    if (!category) throw new Error('Category not found');

    category.is_deleted = is_deleted ?? true;
    await category.save();
    return { id: category._id, is_deleted: category.is_deleted };
  } catch (error) {
    return new Error('Error deleting category');
  }
};
