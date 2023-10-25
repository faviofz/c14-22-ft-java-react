import { useDispatch, useSelector } from 'react-redux';
import { getAllProviderAsync } from '@/redux/reducers';

export function useProviders() {
  const { providers, loading } = useSelector(state => state.providers);
  const dispatch = useDispatch();

  function getAllProviders() {
    dispatch(getAllProviderAsync());
  }
  //   function createProvider(){}
  //   function getProvider(){}
  //   function updateProvider(){}
  //   function deleteProvider(){}
  return { providers, loading, getAllProviders };
}
