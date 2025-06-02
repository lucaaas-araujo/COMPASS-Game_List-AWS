import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

export const ensureAuthentication: RequestHandler = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ message: 'Token não fornecido.' });
    return;
  }

  const [type, , token] = authorization.split(' ');

  if (type !== 'Bearer') {
    res.status(401).json({ message: 'Token não é Bearer.' });
    return;
  }

  const secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, secret);

  if (typeof decoded === 'string') {
    res.status(401).json({ message: 'Token não é valido.' });
    return;
  }

  next();
};
