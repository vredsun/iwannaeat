import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '..';
import { apiPostEat } from '../../api/api';
import { EatData } from '../eats/models';
import eatsSlice from '../eats/reducer';
import type { AddEatStateT } from './models';

const initialState: AddEatStateT = {
  data: {
    name: '',
  },
  requestStatus: {
    ok: true,
    loading: false,
    error: false,
  },
};

export const postEat = createAsyncThunk<
  EatData,
  AddEatStateT['data'],
  {
    dispatch: AppDispatch,
    state: RootState,
  }>(
  'addEat/postEat',
  async (eat, thunkAPI) => {
    const data = await apiPostEat(eat);

    thunkAPI.dispatch(eatsSlice.actions.addEat(data));

    return data;
  }
);

const addEatSlice = createSlice({
  name: 'addEat',
  initialState,
  reducers: {
    editAddEatName(
      state,
      action: PayloadAction<Pick<AddEatStateT['data'], 'name'>>,
    ) {
      state.data.name = action.payload.name;
    },
  },
  extraReducers: builder => {
    builder.addCase(postEat.fulfilled, (state) => {
      state.data = initialState.data;
    })
  },
});

export default addEatSlice;
