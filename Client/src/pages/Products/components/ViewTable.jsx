import PropTypes from 'prop-types'
import {list as ListIcon, grid as GridIcon} from '@/assets/svg' 

export function ViewTable({viewType, handleSwitchView}) {

  return (
    <div className='absolute flex items-center gap-2 right-3 top-[5.5rem]'>
      <p className='hidden sm:inline'>Vista</p>
      <button
        onClick={() => handleSwitchView('list')}
        className={`${
          viewType === 'list' ? 'active bg-base-200' : 'transparent'
        } transition-all p-1 ease-in-out rounded-lg`}
      >
        <ListIcon/>
      </button>
      <button
        onClick={() => handleSwitchView('cards')}
        className={`${
          viewType === 'cards' ? 'active bg-base-200' : 'transparent'
        } transition-all p-1 ease-in-out rounded-lg`}
      >
        <GridIcon/>
      </button>
    </div>
  );
}

ViewTable.propTypes = {
  viewType: PropTypes.string, 
  handleSwitchView: PropTypes.func,
}
