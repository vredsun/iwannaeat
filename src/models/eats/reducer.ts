import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { eatsMockData } from './eats.mock';
import { EatsStateT } from './models';

const initialState: EatsStateT = {
  list: eatsMockData, // [],
};

const eatsSlice = createSlice({
  name: 'eats',
  initialState,
  reducers: {
    setLoadingStatus(
      state,
      action: PayloadAction<{ vehicleId: string | number; runNumber: number }>,
    ) {
      // const {
      //   payload: { vehicleId, runNumber },
      // } = action;
      // const dataKey = getRoutesByRoadsKey(vehicleId, runNumber);

      // state[dataKey].status = getRequestLoadingStatus();
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
