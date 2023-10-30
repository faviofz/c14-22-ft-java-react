import PropTypes from 'prop-types';
import { useId } from 'react';

export function Select({ label, list, errorMessage, ...props }) {
  const id = useId();

  return (
    <div>
      <label className='label'>
        <span className='font-bold label-text'>{label}</span>
      </label>
      <select className='w-full input input-bordered' {...props}>
        <option value=''>Seleccione {label}</option>
        {list.map(item => (
          <option key={item.id + id} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {errorMessage && (
        <label className='label'>
          <span className='label-text-alt text-error'>{errorMessage}</span>
        </label>
      )}
    </div>
  );
}

Select.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

Select.defaultProps = {
  label: '',
  errorMessage: '',
};
