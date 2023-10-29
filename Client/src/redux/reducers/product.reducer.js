import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  serviceGetAllProducts,
  serviceDeleteProduct,
  serviceCreateProduct,
} from '@/services';

export const getAllProductsAsync = createAsyncThunk(
  'products/getAll',
  async () => {
    const response = await serviceGetAllProducts();
    return response;
  }
);

export const createProductAsync = createAsyncThunk(
  'products/createProduct',
  async productData => {
    const response = await serviceCreateProduct(productData);
    return response;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'products/delete',
  async id => {
    const response = await serviceDeleteProduct(id);
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: state => state,
  },
  extraReducers: builder => {
    builder.addCase(getAllProductsAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProductsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    // --------------------------------
    builder.addCase(createProductAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(createProductAsync.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
    // --------------------------------
    builder.addCase(deleteProductAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const idProduct = action.payload;
      const index = state.products.findIndex(
        product => product.id === idProduct
      );
      state.products.splice(index, 1);
    });
  },
});
export const { getAllProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
