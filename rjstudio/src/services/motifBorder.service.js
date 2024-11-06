import { api } from './api';
import { Constants } from '../utils/constants';

export const getMotifBorder = () => {
  return api.get(
    Constants.URL.getMotifBorder,
    {},
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
};
