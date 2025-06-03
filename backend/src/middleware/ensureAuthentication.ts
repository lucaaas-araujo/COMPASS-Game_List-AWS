import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

type Locals = {
  user: {
    user_id: string;
  };
};

type JwtPayload = {
  id: string;
  full_name?: string;
};

type EnsureAuthenticationProps = RequestHandler<
  unknown,
  unknown,
  unknown,
  unknown,
  Locals
>;

export const ensureAuthentication: EnsureAuthenticationProps = (
  req,
  res,
  next,
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'Token não fornecido.' });
    return;
  }

  const [type, token] = authorization.split(' ');

  if (type !== 'Bearer') {
    res.status(401).json({ message: 'Token não é Bearer.' });
    return;
  }

  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret) as JwtPayload;

  if (typeof decoded === 'string') {
    res.status(401).json({ message: 'Token não é valido.' });
    return;
  }

  res.locals.user = { user_id: decoded.id };

  next();
};
