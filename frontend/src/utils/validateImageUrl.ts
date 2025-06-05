import { toast } from 'react-toastify';

export const validateImageUrl = (url: string | undefined) => {
  if (url && !url.startsWith('http')) {
    toast.error('Image URL must start with http or https.');
    return;
  }
};
