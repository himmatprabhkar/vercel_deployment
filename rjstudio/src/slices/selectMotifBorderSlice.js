import { createSlice } from '@reduxjs/toolkit';

const selectMotifBorderSlice = createSlice({
  name: 'selectMotifBorder',
  initialState: {
    selectedMotifBorder: 0,
  },
  reducers: {
    setSelectMotifBorder(state, action) {
      state.selectedMotifBorder = action.payload.selectedMotifBorder;
    },
  },
});

export const { setSelectMotifBorder } = selectMotifBorderSlice.actions;
export default selectMotifBorderSlice.reducer;
