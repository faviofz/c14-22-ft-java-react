import PropTypes from 'prop-types';

export function Button({ children, ...props }) {
  return (
    <button className='normal-case btn btn-primary btn-block btn-component' {...props}>
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
