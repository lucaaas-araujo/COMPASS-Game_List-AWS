import { platformServices } from '@/services';
import { RequestHandler } from 'express';

export const remove: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const result = await platformServices.deletePlatform({ id });

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json({ message: 'Platform deleted successfully.' });
};