import { platformServices } from '@/services';
import { RequestHandler } from 'express';

type Params = {
  id: string;
};

type DeleteProps = RequestHandler<Params>;

export const deleteById: DeleteProps = async (req, res) => {
  const { id } = req.params;

  const result = await platformServices.deleteById({ id });

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json({ message: 'Platform deleted successfully.' });
};