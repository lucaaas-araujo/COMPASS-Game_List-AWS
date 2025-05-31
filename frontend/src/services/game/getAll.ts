import { api } from '../api';

export const getAll = async () => {
  try {
    const response = await api.get('/game');
    console.log('Fetched game:', response);
    return response.data;
  } catch (error) {
    console.error('Error fetching game:', error);
    throw error;
  }
};
