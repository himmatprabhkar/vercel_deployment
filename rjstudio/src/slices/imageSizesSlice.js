import { createSlice } from '@reduxjs/toolkit';

const imageSizesSlice = createSlice({
  name: 'uploadImage',
  initialState: {
    sizeDetails: {},
  },
  reducers: {
    setImageSize(state, action) {
      state.sizeDetails = action.payload.sizeDetails;
    },
  },
});

export const { setImageSize } = imageSizesSlice.actions;
export default imageSizesSlice.reducer;
