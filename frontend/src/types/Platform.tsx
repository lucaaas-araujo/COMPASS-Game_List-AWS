export type PlatformProps = {
  image_url?: string;
  title: string;
  company?: string;
  acquisition_year?: Date;
  is_deleted?: boolean;
};

export type EditPlatformProps = {
  itemId: string;
  platformData: Omit<PlatformProps, 'is_deleted'>;
};
