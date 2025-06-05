export type GameProps = {
  image_url: string;
  title: string;
  description: string;
  category: string;
  platform: string;
  status: string;
  favorite: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  acquisition_date: Date;
  finish_date: Date;
  is_deleted?: boolean;
};

export type EditGameProps = {
  itemId: string;
  gameData: GameProps;
};
