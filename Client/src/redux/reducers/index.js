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

import { getAllProviderAsync, createProviderAsync, deleteProviderAsync } from './providers.reducer';

export {
  // Product
  getAllProductAsync,
  deleteProductAsync,
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
  // Provider
  getAllProviderAsync,
  createProviderAsync,
  deleteProviderAsync,
};
