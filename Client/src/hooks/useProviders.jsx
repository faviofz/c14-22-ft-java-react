import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProviderAsync,
  createProviderAsync,
  deleteProviderAsync,
} from '@/redux/reducers';

export function useProviders() {
  const { providers, loading } = useSelector(state => state.providers);
  const dispatch = useDispatch();

  function getAllProviders() {
    dispatch(getAllProviderAsync());
  }
  function createProvider(data) {
    dispatch(createProviderAsync(data));
  }
  function deleteProvider(id) {
    dispatch(deleteProviderAsync(id));
  }
  //   function getProvider(){}
  //   function updateProvider(){}
  return {
    providers,
    loading,
    getAllProviders,
    createProvider,
    deleteProvider,
  };
}
