import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/product.reducer';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

export default store;
