import Game from '@/models/game';

export const getAll = async () => {
  try {
    const games = await Game.find();
    return games;
  } catch (error) {
    console.log(`GET_ALL_GAMES: ${error}`);
    return new Error('Error retrieving games.');
  }
};
