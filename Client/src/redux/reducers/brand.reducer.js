import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  serviceGetAllBrands,
  serviceGetBrand,
  serviceCreateBrand,
  serviceUpdateBrand,
  serviceDeleteBrand,
} from '@/services';

export const getAllBrandsAsync = createAsyncThunk('brand/getAll', async () => {
  const response = await serviceGetAllBrands();
  return response;
});

export const getBrandAsync = createAsyncThunk('brand/getOne', async id => {
  const response = await serviceGetBrand(id);
  return response;
});

export const createBrandAsync = createAsyncThunk(
  'brand/create',
  async newBrand => {
    const response = await serviceCreateBrand(newBrand);
    return response;
  }
);

export const updateBrandAsync = createAsyncThunk(
  'brand/update',
  async modifiedBrand => {
    const response = await serviceUpdateBrand(modifiedBrand);
    return response;
  }
);

export const deleteBrandAsync = createAsyncThunk('brand/delete', async id => {
  const response = await serviceDeleteBrand(id);
  return response;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllBrandsAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllBrandsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    });
    // --------------------------------
    builder.addCase(getBrandAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getBrandAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload;
    });
    // --------------------------------
    builder.addCase(createBrandAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(createBrandAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.brands.push(action.payload);
    });
  },
});

export default brandsSlice.reducer;
