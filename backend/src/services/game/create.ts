import Game from '@/models/game';
import { Types } from 'mongoose';

type CreateProps = {
  image_url: string;
  title: string;
  description: string;
  category: string;
  platform: string;
  status: string;
  favorite: boolean;
  acquisition_date: Date;
  finish_date: Date;
  user_id: Types.ObjectId;
  is_deleted: boolean;
};

export const create = async ({
  image_url,
  title,
  description,
  category,
  platform,
  status,
  favorite,
  acquisition_date,
  finish_date,
  user_id,
  is_deleted,
}: CreateProps) => {
  try {
    const game = new Game({
      image_url,
      title,
      description,
      category,
      platform,
      status,
      favorite,
      acquisition_date,
      finish_date,
      user_id,
      is_deleted,
    });

    const { _id } = await game.save();
    return _id;
  } catch (error) {
    console.log(`REGISTER_GAME: ${error}`);
    return new Error('Error registering game.');
  }
};
