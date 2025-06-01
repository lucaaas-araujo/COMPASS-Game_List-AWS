import { useState, type ReactNode } from 'react';
import { CategoryContext } from '../hooks/useCategory';
import { api } from '../services/api';
import type { CategoryProps } from '../types/Category';

type CategoryProviderProps = {
  children: ReactNode;
};

export function CategoryProvider({ children }: CategoryProviderProps) {
  const [allCategories, setAllCategories] = useState([]);
  const [duplicateCategories, setDuplicateCategories] = useState([]);
  const [error, setError] = useState(false);
  const [categoryCount, setCategoryCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const userId = '683851eeebf3ec3283664b14';

  const getAll = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/category/${userId}`);
      setCategoryCount(response.data.length);
      setLoading(false);
      setAllCategories(response.data);
      setDuplicateCategories(response.data);
    } catch (error) {
      console.error('Error fetching category:', error);
      setError(true);
      setLoading(false);
    }
  };

  const create = async (categoryData: CategoryProps) => {
    try {
      setLoading(true);
      await api.post('/category', categoryData);
      setLoading(false);
    } catch (error) {
      console.error('Error creating category:', error);
      setError(true);
      setLoading(false);
    }
  };

  const remove = async (): Promise<void> => {
    try {
      setLoading(true);
      await api.delete(`/category/${userId}`);
      setLoading(false);
    } catch (error) {
      console.error('Error deleting category:', error);
      setError(true);
      setLoading(false);
    }
  };

  const update = async (categoryData: CategoryProps): Promise<void> => {
    try {
      setLoading(true);
      await api.put(`/category/${userId}`, {
        name: categoryData.name,
        description: categoryData.description,
      });
      setLoading(false);
    } catch (error) {
      console.error('Error updating category:', error);
      setError(true);
      setLoading(false);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        allCategories,
        duplicateCategories,
        getAll,
        create,
        remove,
        update,
        categoryCount,
        error,
        loading,
      }}>
      {children}
    </CategoryContext.Provider>
  );
}
