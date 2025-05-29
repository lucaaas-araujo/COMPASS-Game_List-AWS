import { Request, Response } from 'express';
import { categoryService } from '@/services';

export const deleteCategory = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!id) {
    res.status(400).json({ error: 'ID da categoria é obrigatório.' });
    return;
  }

  const result = await categoryService.deleteCategory({ id, is_deleted: true });

  if (result instanceof Error) {
    res.status(500).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
