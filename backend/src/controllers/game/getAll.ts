import { RequestHandler } from 'express';

import { gameServices } from '@/services/game';

type Params = {
  user_id: string;
};

type Query = {
  per_page?: string;
  page?: string;
  title?: string;
  category?: string;
  favorite?: string;
  is_deleted?: boolean;
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
    is_deleted?: boolean;
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
  const { per_page, page, sort, dir, title, category, favorite, is_deleted } =
    req.query;

  const _per_page = typeof per_page === 'string' ? Number(per_page) : 10;
  const _page = typeof page === 'string' ? Number(page) : 1;
  const _sort = typeof sort === 'string' ? sort : 'title';
  const _dir = typeof dir === 'string' ? dir : 'asc';
  const _dirBoolean = _dir === 'asc' || _dir === 'desc' ? _dir : 'asc';

  const _title = typeof title === 'string' ? title : undefined;
  const _categoty = typeof category === 'string' ? category : undefined;
  const _favorite = typeof favorite === 'string' ? favorite : undefined;
  const _favoriteBoolean =
    _favorite === 'true' ? true : _favorite === 'false' ? false : undefined;
  const _is_deleted = typeof is_deleted === 'string' ? is_deleted : undefined;
  const _is_deletedBoolean =
    _is_deleted === 'true' ? true : _is_deleted === 'false' ? false : undefined;

  res.locals.pagination = {
    per_page: _per_page,
    page: _page,
    sort: _sort,
    dir: _dirBoolean,
  };

  res.locals.filters = {
    title: _title,
    category: _categoty,
    favorite: _favoriteBoolean,
    is_deleted: _is_deletedBoolean,
  };

  next();
};

export const getAll: GetAllProps = async (req, res) => {
  const { user_id } = req.params;
  const { per_page, page, sort, dir } = res.locals.pagination;
  const { title, category, favorite, is_deleted } = res.locals.filters;

  const games = await gameServices.getAll({
    user_id,
    per_page,
    page,
    title,
    category,
    favorite,
    is_deleted,
    sort,
    dir,
  });

  if (games instanceof Error) {
    res.status(500).json({ Error: games.message });
    return;
  }

  res.status(200).json({ games });
};
