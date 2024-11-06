import { createSlice } from '@reduxjs/toolkit';

const imageStatusSlice = createSlice({
  name: 'uploadImage',
  initialState: {
    imageStatus: 0,
  },
  reducers: {
    setImageStatus(state, action) {
      state.imageStatus = action.payload.imageStatus;
    },
  },
});

export const { setImageStatus } = imageStatusSlice.actions;
export default imageStatusSlice.reducer;
