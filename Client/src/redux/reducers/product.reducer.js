import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { serviceGetAllProducts, serviceDeleteProduct } from '@/services';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch(
      'https://inexpensive-action-production.up.railway.app/productos'
    );
    const data = await response.json();
    return data;
  }
);

export const getAllProductAsync = createAsyncThunk(
  'products/getAll',
  async () => {
    const response = await serviceGetAllProducts();
    return response;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'products/delete',
  async (id) => {
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
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = 'succeeded';
      state.products = action.payload;
    });
    builder.addCase(getAllProductAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAllProductAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
  },
});

export default productsSlice.reducer;
