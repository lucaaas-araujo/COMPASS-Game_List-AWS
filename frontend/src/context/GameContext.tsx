import { useState, type ReactNode } from 'react';
import { GameContext } from '../hooks/useGame';
import { api } from '../services/api';
import type { GameProps } from '../types/Game';

type GameProviderProps = {
  children: ReactNode;
};

export function GameProvider({ children }: GameProviderProps) {
  const [allGames, setAllGames] = useState([]);
  const [duplicateGames, setDuplicateGames] = useState([]);
  const [error, setError] = useState(false);
  const [gameCount, setGameCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const userId = '683851eeebf3ec3283664b14';

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.get('/game');
      setGameCount(response.data.length);
      setLoading(false);
      setAllGames(response.data);
      setDuplicateGames(response.data);
    } catch (error) {
      console.error('Error fetching game:', error);
      setError(true);
      setLoading(false);
    }
  };

  const create = async (gameData: GameProps) => {
    try {
      setLoading(true);
      await api.post('/game', gameData);
      setLoading(false);
    } catch (error) {
      console.error('Error creating game:', error);
      setError(true);
      setLoading(false);
    }
  };

  const remove = async (): Promise<void> => {
    try {
      setLoading(true);
      await api.delete(`/game/${userId}`);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting game:', error);
      setError(true);
      setLoading(false);
    }
  };

  const update = async (gameData: GameProps): Promise<void> => {
    try {
      setLoading(true);
      await api.put(`/game/${userId}`, { gameData });
      setLoading(false);
    } catch (error) {
      console.error('Error updating game:', error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <GameContext.Provider
      value={{
        allGames,
        duplicateGames,
        getAll,
        create,
        remove,
        update,
        gameCount,
        error,
        loading,
      }}>
      {children}
    </GameContext.Provider>
  );
}
