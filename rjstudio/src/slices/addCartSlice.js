import { createSlice } from '@reduxjs/toolkit';

const addCartSlice = createSlice({
  name: 'addCart',
  initialState: {
    cartItemCount: 0,
  },
  reducers: {
    setCartItemCount(state, action) {
      state.cartItemCount = action.payload.cartItemCount;
    },
  },
});

export const { setCartItemCount } = addCartSlice.actions;
export default addCartSlice.reducer;
