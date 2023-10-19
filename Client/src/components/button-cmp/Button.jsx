import PropTypes from 'prop-types';

export function Button({ children, ...props }) {
  return (
    <button className='btn btn-primary btn-block normal-case' {...props}>
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
