import { useDispatch, useSelector } from 'react-redux';
import {
  // getAllProducts as getAllProductsSync,
  getAllProductsAsync,
  deleteProductAsync,
  createProductAsync,
} from '@/redux/reducers';

export function useProducts() {
  const { products, loading } = useSelector(state => state.products);
  const dispatch = useDispatch();

  function getAllProducts() {
    if (!products.length) dispatch(getAllProductsAsync());
  }

  function deleteProducts(id) {
    dispatch(deleteProductAsync(id));
  }
  function createProduct(data) {
    dispatch(createProductAsync(data));
  }
  //   function getProduct(){}
  //   function updateProduct(){}
  //   function deleteProduct(){}
  return { products, loading, createProduct, getAllProducts, deleteProducts };
}
