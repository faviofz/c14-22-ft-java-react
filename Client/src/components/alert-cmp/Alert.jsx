import PropTypes from 'prop-types';
import { InfoIcon, SuccessIcon, ErrorIcon, WarningIcon } from './svg';

export function Alert({ type, message = '' }) {
  return (
    <>
      {message ? (
        <div className={`alert alert-${type}`}>
          {type === 'info' && <InfoIcon />}
          {type === 'success' && <SuccessIcon />}
          {type === 'error' && <ErrorIcon />}
          {type === 'warning' && <WarningIcon />}
          <span>{message}</span>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

Alert.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
};
