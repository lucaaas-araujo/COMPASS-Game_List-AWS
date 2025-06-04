export type GameProps = {
  image_url: string;
  title: string;
  description: string;
  category: string;
  platform: string;
  status: string;
  favorite: boolean;
  acquisition_date: string;
  finish_date: string;
  is_deleted?: boolean;
};

export type EditGameProps = {
  itemId: string;
  gameData: GameProps;
};
