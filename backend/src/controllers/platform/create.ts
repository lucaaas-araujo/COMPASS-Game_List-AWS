import { platformServices } from '@/services';
import { RequestHandler } from 'express';

export const create: RequestHandler = async (req, res) => {
  const { image_url, title, company, acquisition_year, user_id } = req.body;

  const result = await platformServices.create({
    image_url,
    title,
    company,
    acquisition_year,
    user_id,
  });

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return
  }

    res.status(201).json({ platform_id: result });
};