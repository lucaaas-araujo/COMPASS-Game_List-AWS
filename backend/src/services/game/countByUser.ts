import Game from '@/models/game';

export const countByUser = async (user_id: string) => {
  try {
    const count = await Game.countDocuments({
      user_id,
      is_deleted: false,
    });
    return count;
  } catch (error) {
    console.log(`COUNT_GAMES_BY_USER: ${error}`);
    return 0;
  }
};
