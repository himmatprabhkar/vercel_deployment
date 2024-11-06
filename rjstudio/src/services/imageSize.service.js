import { api } from './api';
import { Constants } from '../utils/constants';

export const getSizesAndPrice = (imageType) => {
  return api.post(
    Constants.URL.getPriceAndSize,
    { imageType: imageType },
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
};

