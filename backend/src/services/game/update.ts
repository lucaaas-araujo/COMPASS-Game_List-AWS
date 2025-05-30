import Game from '@/models/game';
import { Types } from 'mongoose';

type UpdateGameProps = {
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

export const update = async ({ id, data }: UpdateGameProps) => {
  try {
    if (!Types.ObjectId.isValid(id)) {
      return new Error('Invalid id format.');
    }

    const updated = await Game.findByIdAndUpdate(id, { $set: data });

    if (!updated) {
      return new Error('Game not found.');
    }
    return updated;
  } catch (error) {
    console.error(`UPDATE_GAME: ${error}`);
    return new Error('Error updating game.');
  }
};
