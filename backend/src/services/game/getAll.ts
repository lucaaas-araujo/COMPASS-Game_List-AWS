import Game from '@/models/game';

type getAllProps = {
  user_id: string;
  title?: string;
  category?: string;
  favorite?: string;
  per_page?: number;
  page?: number;
}

export const getAll = async ({user_id, title, category, favorite, per_page = 10, page = 1}: getAllProps) => {

  const filters = {
    user_id,
    ...(title && { title: { $regex: title, $options: 'i' }}), 
    ...(category && { category: { $regex: category, $options: 'i' }}),
    ...(favorite && { favorite })
  };
  

  try {
    const games = await Game.find(filters)
      .limit(per_page).skip((page - 1) * per_page);
    return games;
  } catch (error) {
    console.log(`GET_ALL_GAMES: ${error}`);
    return new Error('Error retrieving games.');
  }
};
