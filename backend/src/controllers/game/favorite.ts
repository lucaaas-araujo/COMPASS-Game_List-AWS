import { gameServices } from '@/services';
import { RequestHandler } from 'express';

type Params = { id: string };
type Body = { favorite: boolean };

type FavoriteProps = RequestHandler<Params, unknown, Body>;

export const favorite: FavoriteProps = async (req, res) => {
  const { id } = req.params;
  const { favorite } = req.body;

  const result = await gameServices.favorite({ id, favorite });

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
