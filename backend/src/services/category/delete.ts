import Category from '@/models/category';

export const deleteById = async (id: string) => {
  try {
    const category = await Category.findByIdAndUpdate(id, { is_deleted: true });

    if (!category) return new Error('Category not found');

    return category._id;
  } catch (error) {
    console.log(error);
    return new Error('Error deleting category');
  }
};
