import { createContext, useContext } from 'react';

import type { GameProps } from '../types/Game';

type GameContextProps = {
  allGames: GameProps[];
  duplicateGames: GameProps[];
  getAll: () => Promise<void>;
  remove: () => Promise<void>;
  create: (gameData: GameProps) => Promise<void>;
  update: (gameData: GameProps) => Promise<void>;
  gameCount: number;
  error: boolean;
  loading: boolean;
};

export const GameContext = createContext<GameContextProps | undefined>(
  undefined,
);

export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};
