import { api } from '../api';

export const remove = async (id: string): Promise<void> => {
  try {
    await api.delete(`/game/${id}`);
  } catch (error) {
    console.error('Error deleting game:', error);
    throw error;
  }
};
