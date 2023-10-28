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

export const getAllProviderAsync = createAsyncThunk(
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
    console.log(providerApi);
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
    builder.addCase(getAllProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.providers = action.payload;
    });
    // --------------------------------
    builder.addCase(getProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.provider = action.payload;
    });
    // --------------------------------
    builder.addCase(createProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(createProviderAsync.fulfilled, (state, action) => {
      state.providers.push(action.payload);
      state.loading = false;
    });
    // --------------------------------
    builder.addCase(deleteProviderAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteProviderAsync.fulfilled, (state, action) => {
      state.loading = false;
      const idProvider = action.payload;
      const index = state.providers.findIndex(
        provider => provider.id === idProvider
      );
      state.providers.splice(index, 1);
    });
  },
});

export default providersSlice.reducer;
