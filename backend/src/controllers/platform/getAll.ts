import { platformServices } from '@/services';
import { RequestHandler } from 'express';

export const getAll: RequestHandler = async (_req, res) => {
  const result = await platformServices.getAllPlatforms();

  if (result instanceof Error) {
    res.status(500).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
