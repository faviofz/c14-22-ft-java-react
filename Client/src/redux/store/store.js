import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../reducers/product.reducer';
import providerReducer from '../reducers/providers.reducer';
import categoriesReducer from '../reducers/category.reducer';
import brandsReducer from '../reducers/brand.reducer';

const store = configureStore({
  reducer: {
    products: productReducer,
    providers: providerReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
  },
});

export default store;
