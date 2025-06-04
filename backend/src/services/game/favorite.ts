import Game from '@/models/game';

type FavoriteGameProps = {
  id: string;
  favorite: boolean;
};

export const favorite = async ({ id, favorite }: FavoriteGameProps) => {
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      { favorite },
      { new: true },
    );

    if (!updatedGame) {
      return new Error('Game not found.');
    }

    return updatedGame;
  } catch (error) {
    console.error(`FAVORITE_GAME: ${error}`);
    return new Error('Error updating favorite game.');
  }
};
