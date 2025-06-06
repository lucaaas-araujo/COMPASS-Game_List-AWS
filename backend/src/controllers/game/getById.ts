import { gameServices } from '@/services';
import { RequestHandler } from 'express';

type Params = {
  id: string;
};

type GetByIdProps = RequestHandler<Params>;

export const getById: GetByIdProps = async (req, res) => {
  const { id } = req.params;
  const result = await gameServices.getById(id);

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
