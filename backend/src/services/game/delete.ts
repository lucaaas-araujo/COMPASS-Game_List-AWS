import Game from '@/models/game';

type DeleteGameProps = {
  id: string;
};

export const deletegame = async ({ id }: DeleteGameProps) => {
  try {
    const deleted = await Game.findByIdAndUpdate(id, { is_deleted: true });

    if (!deleted) {
      return new Error('Game not found.');
    }

    return deleted;
  } catch (error) {
    console.error(`DELETE_GAME: ${error}`);
    return new Error('Error deleting game.');
  }
};
