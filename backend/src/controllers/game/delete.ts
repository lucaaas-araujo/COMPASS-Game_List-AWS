import { gameServices } from '@/services';
import { RequestHandler } from 'express';

export const deletegame: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const result = await gameServices.deletegame({ id });

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
