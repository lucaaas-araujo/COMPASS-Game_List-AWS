import { api } from '../api';

interface CategoryData {
  user_id: string;
  name: string;
  description?: string;
}

export const createCategory = async (categoryData: CategoryData) => {
  try {
    const response = await api.post('/categories', categoryData);
    return response.data;
  } catch (error) {
    console.error('Error creating category:', error);
    throw error;
  }
};



