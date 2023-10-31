import { useDispatch, useSelector } from 'react-redux';
import {
  // getAllProviders as getAllProvidersSync,
  getAllProvidersAsync,
  createProviderAsync,
  deleteProviderAsync,
  updateProviderAsync,
} from '@/redux/reducers';

export function useProviders() {
  const { providers, loading } = useSelector(state => state.providers);
  const dispatch = useDispatch();

  function getAllProviders() {
    if (!providers.length) dispatch(getAllProvidersAsync());
  }

  function getProvider(id) {
    dispatch(deleteProviderAsync(id));
  }

  function createProvider(newProvider) {
    dispatch(createProviderAsync(newProvider));
  }

  function updateProvider(providerModified) {
    dispatch(updateProviderAsync(providerModified));
  }

  function deleteProvider(id) {
    dispatch(deleteProviderAsync(id));
  }

  return {
    providers,
    loading,
    getAllProviders,
    getProvider,
    createProvider,
    deleteProvider,
    updateProvider,
  };
}
