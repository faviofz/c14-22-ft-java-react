import { configureStore } from '@reduxjs/toolkit';
import {
  productsReducer,
  providersReducer,
  categoriesReducer,
  brandsReducer,
  movementsReducer,
} from '../reducers';

const store = configureStore({
  reducer: {
    products: productsReducer,
    providers: providersReducer,
    categories: categoriesReducer,
    brands: brandsReducer,
    movements: movementsReducer,
  },
});

export default store;
