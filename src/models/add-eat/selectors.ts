import { RootState } from '..';

export const selectAddEat = (state: RootState) => state.addEat;
export const selectAddEatData = (state: RootState) => state.addEat.data;
export const selectAddEatRequestStatus = (state: RootState) => state.addEat.requestStatus;
