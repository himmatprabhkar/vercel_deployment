import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserDetails } from '../services/auth.service';

// Define the async thunk for getting user details
export const fetchUserDetails = createAsyncThunk(
  'auth/fetchUserDetails',
  async (_, { getState }) => {
    const state = getState();
    const token = state.auth;
    const result = await getUserDetails(token);
    return result.data;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    token: '',
    userDetails: {},
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.isAuth = true;
      localStorage.setItem('token', action.payload.token);
    },
    logout(state) {
      state.isAuth = false;
      state.token = '';
      state.userDetails = {};
      localStorage.removeItem('token');
      localStorage.removeItem('userDetail');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserDetails.fulfilled, (state, action) => {
        console.log(
          'Extra Reducer - FetchUserDetails Fulfilled',
          action.payload
        );
        state.userDetails = action.payload;
        localStorage.setItem('userDetail', JSON.stringify(action.payload));
      })
      .addCase(fetchUserDetails.pending, () => {
        console.log('Extra Reducer - FetchUserDetails Pending');
      })
      .addCase(fetchUserDetails.rejected, (state, action) => {
        console.log('Extra Reducer - FetchUserDetails Rejected', action.error);
      });
  },
});

export const { login, logout } = authSlice.actions;

export const loginAndFetchDetails = (token) => async (dispatch) => {
  dispatch(login({ token: token?.token }));
  await dispatch(fetchUserDetails());
};

export default authSlice.reducer;
