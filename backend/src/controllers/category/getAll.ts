import { Request, Response } from 'express';
import { categoryService } from '@/services';




export const getAll = async (req: Request, res: Response) => {
  const user_id = req.params.user_id;
  const is_deleted = req.query.is_deleted === 'true';

  if (!user_id) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  const categories = await categoryService.getAll({ user_id, is_deleted });

  if (categories instanceof Error) {
    res.status(400).json({ error: 'No categories found' });
    return;
  }

  res.status(200).json(categories);
};