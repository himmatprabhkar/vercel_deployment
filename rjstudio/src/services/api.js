import axios from 'axios';
import { Constants } from '../utils/constants';
import store from '../store';

function listener() {
  let token = store?.getState()?.auth?.token;
  api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

store.subscribe(listener);

export const api = axios.create({
  baseURL: Constants.URL.base,
});
