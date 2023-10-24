import PropTypes from 'prop-types';

export function Input({ label, errorMessage, ...props }) {
  const { placeholder } = props;

  return (
    <div className='form-control w-full block'>
      {label && (
        <label className='label'>
          <span className='label-text font-bold'>{label}</span>
        </label>
      )}

      <input
        type='text'
        placeholder={placeholder}
        className='input input-bordered w-full'
        {...props}
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
};

Input.defaultProps = {
  label: '',
  placeholder: 'Type here',
  errorMessage: '',
};
