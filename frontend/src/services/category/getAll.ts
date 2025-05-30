import { api } from '../api';

export const getAll = async () => {
  try {
    const response = await api.get('/categories/683851eeebf3ec3283664b14');
    console.log('Fetched categories:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
