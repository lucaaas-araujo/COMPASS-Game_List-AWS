import { platformServices } from '@/services';
import { RequestHandler } from 'express';

export const getById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const result = await platformServices.getPlatformById(id);

  if (result instanceof Error) {
    res.status(404).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
