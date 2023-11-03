import PropTypes from 'prop-types';
import { Input } from '@/components';
import swal from 'sweetalert';
import './counter-cmp.scss';

export function Counter({ handler, currentValue, id, actual }) {
  const handleChange = ({ target }) => {
    if (Number(target.value) < 0) return;
    handler(id)(target.value);
  };

  const handleClick = num => () => {
    if (Number(currentValue) + num < 0) return;

    if (!actual) {
      handler(id)(String(Number(currentValue) + num));
    } else {
      currentValue + num <= actual
        ? handler(id)(String(Number(currentValue) + num))
        : swal(
            'La cantidad de salida no puede superar el stock actual',
            '',
            'warning'
          );
    }
  };

  return (
    <div className='counter-component'>
      <button className='btn btn-outline btn-primary' onClick={handleClick(-1)}>
        -
      </button>
      <Input
        type='number'
        value={currentValue}
        className='border-l-0 border-r-0 border-primary '
        onChange={handleChange}
      />
      <button className='btn btn-primary' onClick={handleClick(1)}>
        +
      </button>
    </div>
  );
}
Counter.propTypes = {
  handler: PropTypes.func,
  currentValue: PropTypes.number,
  id: PropTypes.number,
  actual: PropTypes.number, // solo lo usaremos para la sustracción
};
