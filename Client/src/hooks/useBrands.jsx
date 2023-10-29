import { useSelector, useDispatch } from 'react-redux';
import {
  // getAllBrands as getAllBrandsSync,
  getAllBrandsAsync,
  getBrandAsync,
  createBrandAsync,
  updateBrandAsync,
  deleteBrandAsync,
} from '@/redux/reducers';

export function useBrands() {
  const { brands, loading } = useSelector(state => state.brands);
  const dispatch = useDispatch();

  function getAllBrands() {
    if (!brands.length) dispatch(getAllBrandsAsync());
  }

  function getBrand(id) {
    dispatch(getBrandAsync(id));
  }

  function createBrand(newCategory) {
    dispatch(createBrandAsync(newCategory));
  }

  function updateBrand(modifiedCategory) {
    dispatch(updateBrandAsync(modifiedCategory));
  }

  function deleteBrand(id) {
    dispatch(deleteBrandAsync(id));
  }

  return {
    brands,
    loading,
    getAllBrands,
    getBrand,
    createBrand,
    updateBrand,
    deleteBrand,
  };
}
