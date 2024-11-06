import { api } from './api';
import { Constants } from '../utils/constants';

export const getMotifBorder = () => {
  return api.get(
    Constants.URL.createOrder,
    {},
    {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  );
};
