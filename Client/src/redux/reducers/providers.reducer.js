import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { serviceGetAllProviders } from '@/services';

export const fetchProviders = createAsyncThunk(
  'providers/fetchProviders',
  async () => {
    const response = await fetch(
      'https://inexpensive-action-production.up.railway.app/proveedores'
    );
    const data = await response.json();
    return data;
  }
);

export const getAllProviderAsync = createAsyncThunk(
  'providers/getAll',
  async () => {
    const response = await serviceGetAllProviders();
    return response;
  }
);

const providersSlice = createSlice({
  name: 'providers',
  initialState: {
    providers: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProviders.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.providers = action.payload;
    });
    builder.addCase(getAllProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.providers = action.payload;
    });
  },
});

export default providersSlice.reducer;
