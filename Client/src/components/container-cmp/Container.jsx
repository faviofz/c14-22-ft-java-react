import PropTypes from 'prop-types';
import './container-cmp.scss';

export function Container({ children }) {
  return <div className='container-cmp'>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node,
};
