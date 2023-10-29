import { configureStore } from '@reduxjs/toolkit';
import {
  productsReducer,
  providersReducer,
  categoriesReducer,
  brandsReducer,
} from '../reducers';

const store = configureStore({
  reducer: {
    products: productsReducer,
    providers: providersReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
  },
});

export default store;
