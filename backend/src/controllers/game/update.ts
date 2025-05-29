import { gameServices } from '@/services';
import { RequestHandler } from 'express';

export const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const {
    image_url,
    title,
    description,
    category,
    platform,
    status,
    favorite,
    acquisition_date,
    finish_date,
    is_deleted,
  } = req.body;
  const game = await gameServices.update({
    id,
    data: {
      image_url,
      title,
      description,
      category,
      platform,
      status,
      favorite,
      acquisition_date,
      finish_date,
      is_deleted,
    },
  });

  if (game instanceof Error) {
    res.status(501).json({ error: game.message });
    return;
  }
  res.status(200).json(game);
};
