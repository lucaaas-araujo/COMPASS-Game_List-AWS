import { userServices } from '@/services';
import { RequestHandler } from 'express';

type Locals = {
  user: {
    user_id: string;
  };
};

type MetadataProps = RequestHandler<unknown, unknown, unknown, unknown, Locals>;

export const metadata: MetadataProps = async (req, res) => {
  const { user_id } = res.locals.user;

  const result = await userServices.metadata(user_id);

  if (result instanceof Error) {
    res.status(501).json({ error: result.message });
    return;
  }

  res.status(200).json(result);
};
