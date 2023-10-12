import PropTypes from 'prop-types';

export function Button({ children }) {
  return (
    <button className='btn btn-primary btn-block normal-case'>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node,
};

Button.defaultProps = {
  children: <>Button</>,
};
