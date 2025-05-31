import { useEffect } from 'react';
import { gameServices } from '../services';

export function Games() {
  const games = async () => {
    const getAll = await gameServices.getAll();
    console.log(getAll);
  };

  useEffect(() => {
    games();
  }, []);

  return (
    <main>
      <h3>Games</h3>
    </main>
  );
}
