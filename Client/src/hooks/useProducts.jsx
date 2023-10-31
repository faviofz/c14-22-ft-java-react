import { useDispatch, useSelector } from 'react-redux';
import {
  // getAllProducts as getAllProductsSync,
  getAllProductsAsync,
  getProductAsync,
  createProductAsync,
  updateProductAsync,
  deleteProductAsync,
} from '@/redux/reducers';

export function useProducts() {
  const { products, loading } = useSelector(state => state.products);
  const dispatch = useDispatch();

  function getAllProducts() {
    if (!products.length) dispatch(getAllProductsAsync());
  }

  function getProduct(id) {
    dispatch(getProductAsync(id));
  }

  function createProduct(newProduct) {
    dispatch(createProductAsync(newProduct));
  }

  function updateProduct(productModified) {
    dispatch(updateProductAsync(productModified));
  }

  function deleteProducts(id) {
    dispatch(deleteProductAsync(id));
  }

  return {
    products,
    loading,
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProducts,
  };
}
