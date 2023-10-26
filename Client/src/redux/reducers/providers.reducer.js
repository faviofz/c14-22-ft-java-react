import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { serviceGetAllProviders, serviceCreateProvider, serviceDeleteProvider } from '@/services';

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
export const createProviderAsync = createAsyncThunk(
  'providers/create',
  async (data) => {
    const response = await serviceCreateProvider(data);
    return response;
  }
);

export const deleteProviderAsync = createAsyncThunk(
  'providers/delete',
  async (id) => {
    const response = await serviceDeleteProvider(id);
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
    builder.addCase(createProviderAsync.fulfilled, (state, action) => {
      state.providers.push(action.payload);
    });
    builder.addCase(deleteProviderAsync.fulfilled, (state, action) => {
      const idProvider = action.payload;
      const index = state.providers.findIndex((provider) => (provider.id === idProvider))
      state.providers.splice(index,1)
    });
  },
});

export default providersSlice.reducer;
