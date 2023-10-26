import PropTypes from 'prop-types';

export function Select({ label, list, errorMessage, ...props }) {
  return (
    <div>
      <h3>{label}</h3>
      <select className='w-full input input-bordered' {...props}>
        <option value=''>Seleccione {label}</option>
        {list.map(item => (
          <option key={item.id} value={ (label === 'proveedor') ? item.email : item.nombre}>
            {item.nombre}
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
  type: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  errorMessage: '',
};
