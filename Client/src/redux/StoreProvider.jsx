import { Provider } from 'react-redux';
import store from './store/store';
import PropTypes from 'prop-types';

export const StoreProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

StoreProvider.propTypes = {
  children: PropTypes.node,
};
