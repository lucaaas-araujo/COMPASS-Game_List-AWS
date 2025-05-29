import Category from '@/models/category';

type UpdateCategoryProps = {
  id: string;
  name?: string;
  description?: string;
};

export const update = async ({ id, name, description }: UpdateCategoryProps) => {


  try {
    const category = await Category.findById(id);
    if (!category) throw new Error('Category not found');
    category.name = name ?? category.name;
    category.description = description ?? category.description;
    await category.save();
    return { id: category._id, name: category.name, description: category.description };

  } catch (error) {
    return new Error('Error updating category');
  }

};