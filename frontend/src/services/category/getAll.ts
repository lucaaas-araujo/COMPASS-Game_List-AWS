import { api } from '../api';

interface Category {
  id: string;
  user_id: string;
  name: string;
  description?: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
