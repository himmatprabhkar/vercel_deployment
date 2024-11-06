import { configureStore } from '@reduxjs/toolkit';
import uploadImageReducer from '../slices/uploadImageSlice';
import imageStatusSlice from '../slices/imageStatusSlice';
import imageSizesSlice from '../slices/imageSizesSlice';
import imageCustomSizesSlice from '../slices/imageCustomSizesSlice';
import selectFrameSlice from '../slices/selectFrameSlice';
import selectMotifBorderSlice from '../slices/selectMotifBorderSlice';
import authSlice from '../slices/authSlice';
import addCartSlice from '../slices/addCartSlice';
import orderDetailSlice from '../slices/orderDetailSlice';

const store = configureStore({
  reducer: {
    uploadImage: uploadImageReducer,
    imageStatus: imageStatusSlice,
    imageSize: imageSizesSlice,
    imageCustomSizeZoom: imageCustomSizesSlice,
    frames: selectFrameSlice,
    selectMotifBorder: selectMotifBorderSlice,
    authData: authSlice,
    addCartSlice: addCartSlice,
    orderDetailSlice: orderDetailSlice,
  },
});

export default store;
