//service create category
import Category from '@/models/category';

type CreateCategoryProps = {
  user_id: string;
  name: string;
  description?: string;
};

export const create = async ({
  user_id,
  name,
  description,
}: CreateCategoryProps) => {
  try {
    const category = new Category({
      user_id,
      name,
      description,
    });
    const { _id } = await category.save();
    return { _id };
  } catch (error) {
    return new Error('Error creating category');
  }
};
