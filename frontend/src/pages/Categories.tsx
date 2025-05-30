import { useEffect } from 'react';
import { categoryServices } from '../services';

export function Categories() {
  const categories = async () => {
    const getAll = await categoryServices.getAll();
    console.log(getAll);
  };

  useEffect(() => {
    categories();
  }, []);

  return (
    <main>
      <h3>Categories</h3>
    </main>
  );
}
