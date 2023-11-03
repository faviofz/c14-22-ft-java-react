import PropTypes from 'prop-types';
import { Input } from '@/components';
import './counter-cmp.scss';

export function Counter({ handler, currentValue, id, actual}) {
  const handleChange = ({ target }) => {
    if (Number(target.value) < 0) return;
    handler(id)(target.value);
  };

  const handleClick = num => () => {
    console.log(`${(Number(currentValue) + num)} menor a ${actual}`)
    if (Number(currentValue) + num < 0) return;
    if((Number(currentValue) + num) > actual) return;
    handler(id)(String(Number(currentValue) + num));
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
Counter.propType = {
  handler: PropTypes.func,
  currentValue: PropTypes.string,
  id: PropTypes.number,
  actual: PropTypes.number,
};
