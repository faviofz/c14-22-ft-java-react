import PropTypes from 'prop-types';
import { list as ListIcon, grid as GridIcon } from '@/assets/svg';
import { viewModeType } from '../constants';

export function SwitchViewMode({ currentType, handleChange }) {
  return (
    <div className='flex items-center gap-2'>
      <p className='hidden sm:inline'>Vista</p>
      <button
        onClick={() => handleChange(viewModeType.TABLE)}
        className={`${
          currentType === viewModeType.TABLE
            ? 'active bg-base-200'
            : 'transparent'
        } transition-all p-1 ease-in-out rounded-lg`}
      >
        <ListIcon className="[&>path]:stroke-primary" />
      </button>
      <button
        onClick={() => handleChange(viewModeType.GRID)}
        className={`${
          currentType === viewModeType.GRID
            ? 'active bg-base-200'
            : 'transparent'
        } transition-all p-1 ease-in-out rounded-lg`}
      >
        <GridIcon className="[&>path]:stroke-primary" />
      </button>
    </div>
  );
}

SwitchViewMode.propTypes = {
  currentType: PropTypes.string,
  handleChange: PropTypes.func,
};
