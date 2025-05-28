import { platformServices } from '@/services';
import { RequestHandler } from 'express';

export const update: RequestHandler = async (req, res) => {
  const { id } = req.params;
  const { image_url, title, company, acquisition_year } = req.body;

  const result = await platformServices.updatePlatform({
    id,
    data: { image_url, title, company, acquisition_year },
  });

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
