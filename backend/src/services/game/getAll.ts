import Game from '@/models/game';

type getAllProps = {
  user_id: string;
  per_page: number;
  page: number;
  title?: string;
  category?: string;
  favorite?: boolean;
  is_deleted?: boolean;
  sort: string;
  dir: 'asc' | 'desc';
};

export const getAll = async ({
  user_id,
  per_page,
  page,
  title,
  category,
  favorite,
  is_deleted,
  sort,
  dir,
}: getAllProps) => {
  const skip = (page - 1) * per_page;

  const filters = {
    user_id,
    ...(title && { title: { $regex: title, $options: 'i' } }),
    ...(category && { category }),
    ...(favorite && { favorite }),
    ...(is_deleted && { is_deleted }),
  };

  try {
    const games = await Game.find(filters)
      .limit(per_page)
      .skip(skip)
      .sort({ [sort]: dir });

    if (!games || games.length === 0) {
      return new Error();
    }

    return games;
  } catch (error) {
    console.log(`GET_ALL_GAMES: ${error}`);
    return new Error('Error retrieving games.');
  }
};
