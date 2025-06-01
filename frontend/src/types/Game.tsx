export type GameProps = {
  image_url: string;
  title: string;
  description: string;
  category: string;
  platform: string;
  status: string;
  favorite: boolean;
  acquisition_date: Date;
  finish_date: Date;
  user_id: string;
  is_deleted: boolean;
};

export type EditGameProps = {
  id: string;
  data: Partial<GameProps>;
};
