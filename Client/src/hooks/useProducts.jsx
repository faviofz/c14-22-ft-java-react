import { useDispatch, useSelector } from 'react-redux';
import { getAllProductAsync, deleteProductAsync} from '@/redux/reducers';

export function useProducts() {
  const { products, loading } = useSelector(state => state.products);
  const dispatch = useDispatch();

  function getAllProducts() {
    dispatch(getAllProductAsync());
  }

  function deleteProducts(id) {
    dispatch(deleteProductAsync(id));
  }
  //   function createProduct(){}
  //   function getProduct(){}
  //   function updateProduct(){}
  //   function deleteProduct(){}
  return { products, loading, getAllProducts, deleteProducts };
}
