import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

export function PublicRoutes({ children }) {
  const location = useLocation();
  const { authState } = useAuth();
  const { isLogged } = authState;

  return !isLogged ? (
    children
  ) : (
    <Navigate to='/dashboard' state={{ from: location }} replace />
  );
}

PublicRoutes.propTypes = {
  children: PropTypes.node,
};
