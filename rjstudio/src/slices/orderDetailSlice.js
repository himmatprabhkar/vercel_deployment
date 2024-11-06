import { createSlice } from '@reduxjs/toolkit';

const orderDetailSlice = createSlice({
  name: 'orderDetails',
  initialState: {
    userId: '',
    image: '',
    sizeId: '',
    sizeName: '',
    sizePrice: '',
    customWidth: '',
    customHeight: '',
    frameId: '',
    frameWidth: '',
    frameDepth: '',
    frameName: '',
    frameCategoery: '',
    frameSample: '',
    motifBorderId: '',
    motifBorderSizeName: '',
    motifBorderPrice: '',
    motifBorderSize: '',
    productName: 'Photo Print Under Acrylic Glass',
    productDescription:
      '12.8 x 8″ (External dimensions: 14.4 x 9.6″); incl. wall mount worth $12.00; Fuji Crystal Archive; glossy, Acrylic glass 0,08"; glossy, Alu-Dibond 0,12"; Hamburg, Profile 0.8" (Black oak); Aluminum rails',
  },
  reducers: {
    setSizeOrderDetail(state, action) {
      for (const key in action.payload) {
        if (Object.prototype.hasOwnProperty.call(state, key)) {
          state[key] = action.payload[key];
        }
      }
    },
    setCustomSizeOrderDetail(state, action) {
      for (const key in action.payload) {
        if (Object.prototype.hasOwnProperty.call(state, key)) {
          state[key] = action.payload[key];
        }
      }
    },
    setFrameOrderDetail(state, action) {
      for (const key in action.payload) {
        if (Object.prototype.hasOwnProperty.call(state, key)) {
          state[key] = action.payload[key];
        }
      }
    },
    setMotifBorderDetail(state, action) {
      state.motifBorderId = action.payload.motifBorderId;
      state.motifBorderSizeName = action.payload.motifBorderSizeName;
      state.motifBorderPrice = action.payload.motifBorderPrice;
      state.motifBorderSize = action.payload.motifBorderSize;
    },
  },
});

export const {
  setSizeOrderDetail,
  setCustomSizeOrderDetail,
  setFrameOrderDetail,
  setMotifBorderDetail,
} = orderDetailSlice.actions;

export default orderDetailSlice.reducer;