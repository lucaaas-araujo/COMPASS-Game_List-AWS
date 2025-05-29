import Game from '@/models/game';

type GetAllGamesProps = {
  user_id: string;
};

export const getAll = async ({ user_id }: GetAllGamesProps) => {
  try {
    const games = await Game.find({ user_id });
    return games;
  } catch (error) {
    console.log(`GET_ALL_GAMES: ${error}`);
    return new Error('Error retrieving games.');
  }
};
