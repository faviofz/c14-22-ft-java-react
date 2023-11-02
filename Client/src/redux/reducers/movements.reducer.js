import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  serviceGetAllMovements,
} from '@/services';

export const getAllMovementsAsync = createAsyncThunk(
  'movements/getAll',
  async () => {
    const response = await serviceGetAllMovements();
    return response;
  }
);

const movementsSlice = createSlice({
  name: 'movements',
  initialState: {
    movements: [],
  },
  reducers: {
    getAllMovements: state => state,
  },
  extraReducers: builder => {
    builder.addCase(getAllMovementsAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllMovementsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.movements = action.payload;
    });
  },
});
export const { getAllMovements } = movementsSlice.actions;
export const movementsReducer = movementsSlice.reducer;
