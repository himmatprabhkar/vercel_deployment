import { createSlice } from '@reduxjs/toolkit';

const uploadImageSlice = createSlice({
  name: 'uploadImage',
  initialState: {
    url: '',
    shouldGetCropData: false,
    imageType: '',
    dpi: {},
  },
  reducers: {
    setImageUrl: (state, action) => {
      if (action.payload.url) {
        state.url = action.payload.url;
      }
      if (action.payload.imageType) {
        state.imageType = action.payload.imageType;
      }
      if (action.payload.dpi) {
        state.dpi = action.payload.dpi;
      }
    },

    triggerGetCropData: (state) => {
      state.shouldGetCropData = 1;
    },
    resetGetCropData: (state) => {
      state.shouldGetCropData = 0;
    },
  },
});

export const { setImageUrl, triggerGetCropData, resetGetCropData } =
  uploadImageSlice.actions;

export default uploadImageSlice.reducer;
