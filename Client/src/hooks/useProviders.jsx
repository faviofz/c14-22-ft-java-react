import { useDispatch, useSelector } from 'react-redux';
import {
  // getAllProviders as getAllProvidersSync,
  getAllProvidersAsync,
  createProviderAsync,
  deleteProviderAsync,
} from '@/redux/reducers';

export function useProviders() {
  const { providers, loading } = useSelector(state => state.providers);
  const dispatch = useDispatch();

  function getAllProviders() {
    if (!providers.length) dispatch(getAllProvidersAsync());
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
