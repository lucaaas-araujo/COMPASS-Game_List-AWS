import { api } from '../api';

interface Category {
  id: string;
  user_id: string;
  name: string;
  description?: string;
}

export const getAllCategories = async (): Promise<Category[]> => {
  try {
    const response = await api.get('/categories/683851eeebf3ec3283664b14');
    console.log('Fetched categories:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

const getAll = await getAllCategories();
console.log(getAll);
