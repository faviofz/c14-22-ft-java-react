import PropTypes from 'prop-types';

export function Input({ label, errorMessage, type, ...props }) {
  const { placeholder } = props;

  return (
    <div className='block w-full form-control'>
      {label && (
        <label className='label'>
          <span className='font-bold label-text'>{label}</span>
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...props}
        className={`w-full input input-bordered ${props.className}`}
      />

      {errorMessage && (
        <label className='label'>
          <span className='label-text-alt text-error'>{errorMessage}</span>
        </label>
      )}
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  label: '',
  placeholder: 'Type here',
  errorMessage: '',
  type: 'text',
};
