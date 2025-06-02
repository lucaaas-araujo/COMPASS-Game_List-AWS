import { gameServices } from '@/services';
import { RequestHandler } from 'express';

export const getAll: RequestHandler = async (req, res) => {
  const { user_id } = req.params;
  const { title, category, favorite, per_page, page } = req.query;
  
  const t = typeof title === 'string' ? title : undefined;
  const c = typeof category === 'string' ? category : undefined;
  const f = typeof favorite === 'string' ? favorite : undefined;
  const p = typeof per_page === 'string' ? Number(per_page) : undefined;
  const pg = typeof page === 'string' ? Number(page) : undefined;

  try {
    const result = await gameServices.getAll({
      user_id,
      title: t,
      category: c,
      favorite: f,
      per_page: p,
      page: pg
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: 'Invalid user_id format.', error });
  }
};
