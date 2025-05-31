import { api } from '../api';

type GameProps = {
  id: string;
  data: Partial<{
    image_url?: string;
    title?: string;
    description?: string;
    category?: string;
    platform?: string;
    status?: string;
    favorite?: boolean;
    acquisition_date?: Date;
    finish_date?: Date;
    is_deleted?: boolean;
  }>;
};

export const update = async (data: GameProps): Promise<void> => {
  try {
    await api.put(`/game/${data.id}`, { ...data });
  } catch (error) {
    console.error('Error updating game:', error);
    throw error;
  }
};
