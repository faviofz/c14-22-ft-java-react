import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  serviceGetAllProviders,
  serviceGetProvider,
  serviceCreateProvider,
  serviceUpdateProvider,
  serviceDeleteProvider,
} from '@/services';
import {
  providerApiListToProviderList,
  providerApiToProvider,
  providerToProviderApi,
} from '@/adapters';

export const getAllProvidersAsync = createAsyncThunk(
  'providers/getAll',
  async () => {
    const providerApiList = await serviceGetAllProviders();
    // adapter
    const providerList = providerApiListToProviderList(providerApiList);
    return providerList;
  }
);

export const getProviderAsync = createAsyncThunk(
  'providers/getOne',
  async id => {
    const response = await serviceGetProvider(id);
    // adapter
    const provider = providerApiToProvider(response);
    return provider;
  }
);

export const createProviderAsync = createAsyncThunk(
  'providers/create',
  async newProvider => {
    // adapter
    const providerApi = providerToProviderApi(newProvider);
    const response = await serviceCreateProvider(providerApi);
    // adapter
    const provider = providerApiToProvider(response);
    return provider;
  }
);

export const updateProviderAsync = createAsyncThunk(
  'providers/update',
  async modifiedProvider => {
    // adapter
    const providerApi = providerToProviderApi(modifiedProvider);
    const response = await serviceUpdateProvider(providerApi);

    // adapter
    const provider = providerApiToProvider(response);
    return provider;
  }
);

export const deleteProviderAsync = createAsyncThunk(
  'providers/delete',
  async id => {
    await serviceDeleteProvider(id);
    return id;
  }
);

const providersSlice = createSlice({
  name: 'providers',
  initialState: {
    providers: [],
  },
  reducers: {
    getAllProviders: state => state,
  },
  extraReducers: builder => {
    builder.addCase(getAllProvidersAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProvidersAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.providers = action.payload;
    });
    // -------------------------------- GET
    builder.addCase(getProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.provider = action.payload;
    });
    // -------------------------------- CREATE
    builder.addCase(createProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(createProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.providers.push(action.payload);
    });
    // -------------------------------- UPDATE
    builder.addCase(updateProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      const providerModified = action.payload;
      const providerId = providerModified.id;
      const index = state.providers.findIndex(
        provider => provider.id === providerId
      );
      state.providers[index] = providerModified;
    });
    // -------------------------------- DELETE
    builder.addCase(deleteProviderAsync.fulfilled, (state, action) => {
      const idProvider = action.payload;
      const index = state.providers.findIndex(
        provider => provider.id === idProvider
      );
      state.providers.splice(index, 1);
    });
  },
});
export const { getAllProviders } = providersSlice.actions;
export const providersReducer = providersSlice.reducer;
