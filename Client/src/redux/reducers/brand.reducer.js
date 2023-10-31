import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  serviceGetAllBrands,
  serviceGetBrand,
  serviceCreateBrand,
  serviceUpdateBrand,
  serviceDeleteBrand,
} from '@/services';
import {
  brandApiListToBrandList,
  brandToBrandApi,
  brandApiToBrand,
} from '@/adapters';

export const getAllBrandsAsync = createAsyncThunk('brand/getAll', async () => {
  const brandApiList = await serviceGetAllBrands();
  // adapter
  const brandList = brandApiListToBrandList(brandApiList);
  return brandList;
});

export const getBrandAsync = createAsyncThunk('brand/getOne', async id => {
  const brandApi = await serviceGetBrand(id);
  // adapter
  const brand = brandApiToBrand(brandApi);
  return brand;
});

export const createBrandAsync = createAsyncThunk(
  'brand/create',
  async newBrand => {
    // adapter
    const brandApi = brandToBrandApi(newBrand);
    const response = await serviceCreateBrand(brandApi);
    // adapter
    const brand = brandApiToBrand(response);
    return brand;
  }
);

export const updateBrandAsync = createAsyncThunk(
  'brand/update',
  async modifiedBrand => {
    // adapter
    const brandApi = brandToBrandApi(modifiedBrand);
    const response = await serviceUpdateBrand(brandApi);
    // adapter
    const brand = brandApiToBrand(response);
    return brand;
  }
);

export const deleteBrandAsync = createAsyncThunk('brand/delete', async id => {
  await serviceDeleteBrand(id);
  return id;
});

const brandsSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
  },
  reducers: {
    getAllBrands: state => state,
  },
  extraReducers: builder => {
    builder.addCase(getAllBrandsAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllBrandsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    });
    // -------------------------------- GET
    builder.addCase(getBrandAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getBrandAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload;
    });
    // -------------------------------- CREATE
    builder.addCase(createBrandAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(createBrandAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.brands.push(action.payload);
    });
    // -------------------------------- UPDATE
    builder.addCase(updateBrandAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(updateBrandAsync.fulfilled, (state, action) => {
      state.loading = false;
      const brandModified = action.payload;
      const brandId = brandModified.id;
      const index = state.brands.findIndex(brand => brand.id === brandId);
      state.brands[index] = brandModified;
    });
    // -------------------------------- DELETE
    builder.addCase(deleteBrandAsync.fulfilled, (state, action) => {
      const brandId = action.payload;
      const index = state.brands.findIndex(brand => brand.id === brandId);
      state.brands.splice(index, 1);
    });
  },
});
export const { getAllBrands } = brandsSlice.actions;
export const brandsReducer = brandsSlice.reducer;
