import { getAllProductAsync, deleteProductAsync } from './product.reducer';
import {
  getAllCategoriesAsync,
  getCategoryAsync,
  createCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
} from './category.reducer';

import { getAllProviderAsync } from './providers.reducer';

export {
  getAllProductAsync,
  deleteProductAsync,
  getAllProviderAsync,
  // Category
  getAllCategoriesAsync,
  getCategoryAsync,
  createCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
};
