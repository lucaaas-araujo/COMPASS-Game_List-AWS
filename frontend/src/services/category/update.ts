import { api } from '../api';

interface CategoryData {
  id: string;
  name: string;
  description?: string;
}

export const update = async (categoryData: CategoryData): Promise<void> => {
  try {
    await api.put(`/categories/${categoryData.id}`, {
      name: categoryData.name,
      description: categoryData.description,
    });
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};
