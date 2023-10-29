import { useSelector, useDispatch } from 'react-redux';
import {
  // getAllCategories as getAllCategoriesSync,
  getAllCategoriesAsync,
  getCategoryAsync,
  createCategoryAsync,
  updateCategoryAsync,
  deleteCategoryAsync,
} from '@/redux/reducers';

export function useCategories() {
  const { categories, loading } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  function getAllCategories() {
    if (!categories.length) dispatch(getAllCategoriesAsync());
  }

  function getCategory(id) {
    dispatch(getCategoryAsync(id));
  }

  function createCategory(newCategory) {
    dispatch(createCategoryAsync(newCategory));
  }

  function updateCategory(modifiedCategory) {
    dispatch(updateCategoryAsync(modifiedCategory));
  }

  function deleteCategory(id) {
    dispatch(deleteCategoryAsync(id));
  }

  return {
    categories,
    loading,
    getAllCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  };
}
