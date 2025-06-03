import { gameServices } from '../../services';
import { RequestHandler } from 'express';

type Params = {
  user_id: string;
};

type Query = {
  per_page?: string;
  page?: string;
  title?: string;
  category?: string;
  favorite?: string;
  sort?: string;
  dir?: 'asc' | 'desc';
};

type Locals = {
  pagination: {
    per_page: number;
    page: number;
    sort: string;
    dir: 'asc' | 'desc';
  };
  filters: {
    title?: string;
    category?: string;
    favorite?: boolean;
  };
};

type GetAllProps = RequestHandler<Params, unknown, unknown, Query, Locals>;

type GetAllValidatorProps = RequestHandler<
  unknown,
  unknown,
  unknown,
  Query,
  Locals
>;

export const getAllValidator: GetAllValidatorProps = (req, res, next) => {
  const { per_page, page, sort, dir, title, category, favorite } = req.query;

  const PP = typeof per_page === 'string' ? Number(per_page) : 10;
  const P = typeof page === 'string' ? Number(page) : 1;
  const S = typeof sort === 'string' ? sort : 'title';
  const D = typeof dir === 'string' ? dir : 'asc';
  const D_2 = D === 'asc' || D === 'desc' ? D : 'asc';

  const T = typeof title === 'string' ? title : undefined;
  const C = typeof category === 'string' ? category : undefined;
  const F = typeof favorite === 'string' ? favorite : undefined;
  const F_2 = F === 'true' ? true : F === 'false' ? false : undefined;

  res.locals.pagination = {
    per_page: PP,
    page: P,
    sort: S,
    dir: D_2,
  };

  res.locals.filters = {
    title: T,
    category: C,
    favorite: F_2,
  };

  next();
};

export const getAll: GetAllProps = async (req, res) => {
  const { user_id } = req.params;
  const { per_page, page, sort, dir } = res.locals.pagination;
  const { title, category, favorite } = res.locals.filters;

  const games = await gameServices.getAll({
    user_id,
    per_page,
    page,
    title,
    category,
    favorite,
    sort,
    dir,
  });

  if (games instanceof Error) {
    res.status(500).json({ Error: games.message });
    return;
  }

  res.status(200).json({ games });
};
