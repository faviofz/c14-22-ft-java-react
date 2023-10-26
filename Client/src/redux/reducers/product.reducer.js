import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { serviceGetAllProducts, serviceDeleteProduct,serviceCreateProduct } from '@/services';

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

export const createProductAsync = createAsyncThunk(
  'products/createProduct',
  async (productData) => {
    const response = await serviceCreateProduct(productData);
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
    // builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
    //   state.products = action.payload;

      // console.log(action.payload)
      // console.log(`BEFORE -> ${state.products}`)

      // state.products.map((item) => {
      //   if(item.id === payload){
      //     let index = state.products.indexOf(item);
      //     state.products.splice(index,1)
      //     return 
      //   }
      // })
      // console.log(` AFTER -> ${state.products}`)

    // });
  },
});

export default productsSlice.reducer;
