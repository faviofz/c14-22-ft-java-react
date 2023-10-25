import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/product.reducer';
import providerReducer from '../reducers/providers.reducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    providers: providerReducer,
  },
});

export default store;
