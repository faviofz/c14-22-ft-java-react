import PropTypes from 'prop-types';
import { InfoIcon, SuccessIcon, ErrorIcon, WarningIcon } from './svg';
import './alert.scss';
export function Alert({ type, message = '' }) {
  const classNameList = [
    'alert-component alert',
    type ? `alert-${type}` : '',
  ].join(' ');
  return (
    <>
      {message ? (
        <div className={classNameList}>
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
