import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  serviceGetAllCategories,
  serviceGetCategory,
  serviceCreateCategory,
  serviceUpdateCategory,
  serviceDeleteCategory,
} from '@/services';

export const getAllCategoriesAsync = createAsyncThunk(
  'categories/getAll',
  async () => {
    const response = await serviceGetAllCategories();
    return response;
  }
);

export const getCategoryAsync = createAsyncThunk(
  'categories/getOne',
  async id => {
    const response = await serviceGetCategory(id);
    return response;
  }
);

export const createCategoryAsync = createAsyncThunk(
  'categories/create',
  async newCategory => {
    const response = await serviceCreateCategory(newCategory);
    return response;
  }
);

export const updateCategoryAsync = createAsyncThunk(
  'categories/update',
  async modifiedCategory => {
    const response = await serviceUpdateCategory(modifiedCategory);
    return response;
  }
);

export const deleteCategoryAsync = createAsyncThunk(
  'categories/delete',
  async id => {
    const response = await serviceDeleteCategory(id);
    return response;
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllCategoriesAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllCategoriesAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.categories = action.payload;
    });
    // --------------------------------
    builder.addCase(getCategoryAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getCategoryAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
    });
    // --------------------------------
    builder.addCase(createCategoryAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(createCategoryAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.categories.push(action.payload);
    });
  },
});

export default categorySlice.reducer;
