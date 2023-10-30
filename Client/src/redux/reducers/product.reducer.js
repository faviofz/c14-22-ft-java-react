import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  serviceGetAllProducts,
  serviceDeleteProduct,
  serviceCreateProduct,
  serviceAddStock,
  serviceSubtractStock,
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

export const addStockAsync = createAsyncThunk(
  'products/addStock',
  async arr => {
    await serviceAddStock(arr);
    return arr;
  }
);

export const subtractStockAsync = createAsyncThunk(
  'products/subtractStock',
  async arr => {
    await serviceSubtractStock(arr);
    return arr;
  }
);

export const deleteProductAsync = createAsyncThunk(
  'products/delete',
  async id => {
    await serviceDeleteProduct(id);
    return id;
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
      state.loading = false;
      state.products.push(action.payload);
    });
    // --------------------------------
    builder.addCase(deleteProductAsync.fulfilled, (state, action) => {
      const idProduct = action.payload;
      const index = state.products.findIndex(
        product => product.id === idProduct
      );
      state.products.splice(index, 1);
    });
    builder.addCase(addStockAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(addStockAsync.fulfilled, (state, action) => {
      state.loading = false;
      const pedidos = action.payload;
      pedidos.forEach(({ id, actual }) => {
        const index = state.products.findIndex(product => product.id === id);
        state.products[index].actual = actual;
      });
    });
    builder.addCase(subtractStockAsync.pending, state => {
      state.loading = true;
    });
    builder.addCase(subtractStockAsync.fulfilled, (state, action) => {
      state.loading = false;
      const pedidos = action.payload;
      pedidos.forEach(({ id, actual }) => {
        const index = state.products.findIndex(product => product.id === id);
        state.products[index].actual = actual;
      });
    });
  },
});
export const { getAllProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
