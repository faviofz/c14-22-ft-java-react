import { getAllProductAsync, deleteProductAsync, createProductAsync } from './product.reducer';

import {
  getAllCategoriesAsync,
  getCategoryAsync,
  createCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
} from './category.reducer';

import {
  getAllBrandsAsync,
  getBrandAsync,
  createBrandAsync,
  updateBrandAsync,
  deleteBrandAsync,
} from './brand.reducer';

import { getAllProviderAsync } from './providers.reducer';

export {
  getAllProductAsync,
  deleteProductAsync,
  getAllProviderAsync,
  createProductAsync ,
  // Category
  getAllCategoriesAsync,
  getCategoryAsync,
  createCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
  // Brand
  getAllBrandsAsync,
  getBrandAsync,
  createBrandAsync,
  updateBrandAsync,
  deleteBrandAsync,
  
};
