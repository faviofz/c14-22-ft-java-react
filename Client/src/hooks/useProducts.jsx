import { useDispatch, useSelector } from 'react-redux';
import {
  // getAllProducts as getAllProductsSync,
  getAllProductsAsync,
  deleteProductAsync,
  createProductAsync,
  addStockAsync,
  subtractStockAsync,  
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
  function addStock(arr) {
    dispatch(addStockAsync(arr));
  }
  function subtractStock(arr) {
    dispatch(subtractStockAsync(arr));
  }
  
  //   function updateProduct(){}
  return { products, loading, createProduct, getAllProducts, deleteProducts, addStock, subtractStock };
}
