import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  serviceGetAllProducts,
  serviceDeleteProduct,
  serviceCreateProduct,
} from '@/services';

export const getAllProductAsync = createAsyncThunk(
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
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getAllProductAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProductAsync.fulfilled, (state, action) => {
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
      const index = state.products.findIndex((product) => (product.id === idProduct))
      state.products.splice(index,1)

    });
  },
});

export default productsSlice.reducer;
