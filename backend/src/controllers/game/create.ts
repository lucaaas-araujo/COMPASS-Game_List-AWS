import { gameServices } from '@/services';
import { RequestHandler } from 'express';

export const create: RequestHandler = async (req, res) => {
  const {
    image_url,
    title,
    description,
    category,
    plataform,
    status,
    favorite,
    acquisition_date,
    finish_date,
    user_id,
    is_deleted,
  } = req.body;

  const game = await gameServices.create({
    image_url,
    title,
    description,
    category,
    plataform,
    status,
    favorite,
    acquisition_date,
    finish_date,
    user_id,
    is_deleted,
  });

  if (game instanceof Error) {
    res.status(501).json({ Error: game.message });
  }

  res.status(201).json(game);
};
