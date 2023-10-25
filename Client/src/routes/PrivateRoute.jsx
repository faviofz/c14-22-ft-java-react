import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function PrivateRoutes({ children }) {
  const location = useLocation();
  const { authState } = useAuth();
  const { isLogged } = authState;

  return isLogged ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
}

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
