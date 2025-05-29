import { Request, Response } from 'express';
import { categoryService } from '@/services';

export const update = async (req: Request, res: Response) => {
    
    const { id } = req.params;
    const { name, description } = req.body;

    if (!id) {
        res.status(400).json({ error: 'ID é obrigatório.' });
        return;
    }
    
    if (name && name.trim().length < 3) {
        res.status(400).json({ error: 'O nome deve ter pelo menos 3 caracteres.' });
        return;
    }
    
    const category = await categoryService.update({ id, name, description });
    
    if (category instanceof Error) {
        res.status(500).json({ error: category.message });
        return;
    }
    
    res.status(200).json(category);
}