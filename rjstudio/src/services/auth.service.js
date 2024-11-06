import { api } from './api';
import { Constants } from '../utils/constants';

export const getBanners = () => {
  return api.get(
    Constants.URL,
    {},
    {
      headers: {
        'content-type': 'application/json',
      },
    }
  );
};

export const loginApi = (data) => {
  return api.post(Constants?.URL?.login, JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
  });
};

export const register = (data) => {
  return api.post(Constants?.URL?.register, JSON.stringify(data), {
    headers: {
      'content-type': 'application/json',
    },
  });
};

export const getUserDetails = () => {
  return api.get(Constants.URL.getUserDetails, {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};
