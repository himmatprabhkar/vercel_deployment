import { createSlice } from '@reduxjs/toolkit';

import frameUp1 from '../assets/images/FrameSides/1sideUp.png';
import frameDown1 from '../assets/images/FrameSides/1sideDown.png';
import frameLeft1 from '../assets/images/FrameSides/1sideLeft.png';
import frameRight1 from '../assets/images/FrameSides/1sideRight.png';
import frameTopLeft1 from '../assets/images/FrameSides/1topLeft.png';
import frameTopRight1 from '../assets/images/FrameSides/1topRight.png';
import frameBottomLeft1 from '../assets/images/FrameSides/1bottomLeft.png';
import frameBottomRight1 from '../assets/images/FrameSides/1bottomRight.png';

import frameUp2 from '../assets/images/FrameSides/2sideUp.png';
import frameDown2 from '../assets/images/FrameSides/2sideDown.png';
import frameLeft2 from '../assets/images/FrameSides/2sideLeft.png';
import frameRight2 from '../assets/images/FrameSides/2sideRight.png';
import frameTopLeft2 from '../assets/images/FrameSides/2topLeft.png';
import frameTopRight2 from '../assets/images/FrameSides/2topRight.png';
import frameBottomLeft2 from '../assets/images/FrameSides/2bottomLeft.png';
import frameBottomRight2 from '../assets/images/FrameSides/2bottomRight.png';

import frameUp3 from '../assets/images/FrameSides/3sideUp.png';
import frameDown3 from '../assets/images/FrameSides/3sideDown.png';
import frameLeft3 from '../assets/images/FrameSides/3sideLeft.png';
import frameRight3 from '../assets/images/FrameSides/3sideRight.png';
import frameTopLeft3 from '../assets/images/FrameSides/3topLeft.png';
import frameTopRight3 from '../assets/images/FrameSides/3topRight.png';
import frameBottomLeft3 from '../assets/images/FrameSides/3bottomLeft.png';
import frameBottomRight3 from '../assets/images/FrameSides/3bottomRight.png';

import frameUp4 from '../assets/images/FrameSides/4sideUp.jpeg';
import frameDown4 from '../assets/images/FrameSides/4sideDown.jpeg';
import frameLeft4 from '../assets/images/FrameSides/4sideLeft.jpeg';
import frameRight4 from '../assets/images/FrameSides/4sideRight.jpeg';
import frameTopLeft4 from '../assets/images/FrameSides/4topLeft.jpeg';
import frameTopRight4 from '../assets/images/FrameSides/4topRight.jpeg';
import frameBottomLeft4 from '../assets/images/FrameSides/4bottomLeft.jpeg';
import frameBottomRight4 from '../assets/images/FrameSides/4bottomRight.jpeg';

const selectFrameSlice = createSlice({
  name: 'uploadImage',
  initialState: {
    imageBorderIndex: 0,
    borders: [
      {

      },
      {
        sideUp: frameUp1,
        sideDown: frameDown1,
        sideLeft: frameLeft1,
        sideRight: frameRight1,
        topLeft: frameTopLeft1,
        topRight: frameTopRight1,
        bottomLeft: frameBottomLeft1,
        bottomRight: frameBottomRight1,
      },
      {
        sideUp: frameUp2,
        sideDown: frameDown2,
        sideLeft: frameLeft2,
        sideRight: frameRight2,
        topLeft: frameTopLeft2,
        topRight: frameTopRight2,
        bottomLeft: frameBottomLeft2,
        bottomRight: frameBottomRight2,
      },
      {
        sideUp: frameUp3,
        sideDown: frameDown3,
        sideLeft: frameLeft3,
        sideRight: frameRight3,
        topLeft: frameTopLeft3,
        topRight: frameTopRight3,
        bottomLeft: frameBottomLeft3,
        bottomRight: frameBottomRight3,
      },
      {
        sideUp: frameUp4,
        sideDown: frameDown4,
        sideLeft: frameLeft4,
        sideRight: frameRight4,
        topLeft: frameTopLeft4,
        topRight: frameTopRight4,
        bottomLeft: frameBottomLeft4,
        bottomRight: frameBottomRight4,
      },
    ],
  },
  reducers: {
    setImageBorder(state, action) {
      state.imageBorderIndex = action.payload.imageBorderIndex;
    },
    setImageMotifBorder(state, action) {
      state.borders[action.payload.index].padding = action.payload.paddingValue;
    },
  },
});

export const { setImageBorder, setImageMotifBorder } = selectFrameSlice.actions;
export default selectFrameSlice.reducer;
