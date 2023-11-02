import { useSelector, useDispatch } from 'react-redux';
import {
  getAllMovementsAsync
} from '@/redux/reducers';

export function useMovements() {
  const { movements, loading } = useSelector(state => state.movements);
  const dispatch = useDispatch();

  function getAllMovements() {
    if (!movements.length) dispatch(getAllMovementsAsync());
  }

  return {
    movements,
    loading,
    getAllMovements,
  };
}
