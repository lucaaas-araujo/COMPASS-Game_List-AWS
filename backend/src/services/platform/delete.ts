import Platform from "@/models/platform";

type DeletePlatformProps = {
  id: string;
};

export const deleted = async ({ id }: DeletePlatformProps) => {
  try {
    const deleted = await Platform.findByIdAndUpdate(id, { is_deleted: true }, { new: true });

    if (!deleted) {
      return new Error('Platform not found.');
    }

    return deleted;
  } catch (error) {
    console.log(`DELETE_PLATFORM: ${error}`);
    return new Error('Error deleting platform.');
  }
};