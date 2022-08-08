import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EatData, EatsStateT } from './models';

const initialState: EatsStateT = {
  list: [],
  byId: {},
};

const eatsSlice = createSlice({
  name: 'eats',
  initialState,
  reducers: {
    addEat(
      state,
      action: PayloadAction<EatData>,
    ) {
      state.list.push(action.payload.id)
      state.byId[action.payload.id] = action.payload;
    },
  },
  extraReducers: builder => {
    // builder.addCase(changeRouteMode.fulfilled, (state, action) => {
    //   const { payload } = action;

    //   const { vehicleId, runNumber, mode } = payload;

    //   state[dataKey].mode = 1111;

    // });
  },
});

export default eatsSlice;
