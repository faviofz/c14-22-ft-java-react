import PropTypes from 'prop-types'
import {list as ListIcon, grid as GridIcon} from '@/assets/svg' 

export function ViewTable({viewType, handleSwitchView}) {

  return (
    <div className='flex items-center gap-2'>
      <p className='hidden sm:inline'>Vista</p>
      <button
        onClick={() => handleSwitchView('list')}
        className={`${
          viewType === 'list' ? 'active bg-base-200' : 'transparent'
        } transition-all p-1 ease-in-out rounded-lg`}
      >
        <ListIcon className="[&>path]:stroke-primary"/>
      </button>
      <button
        onClick={() => handleSwitchView('cards')}
        className={`${
          viewType === 'cards' ? 'active bg-base-200' : 'transparent'
        } transition-all p-1 ease-in-out rounded-lg`}
      >
        <GridIcon className="[&>path]:stroke-primary"/>
      </button>
    </div>
  );
}

ViewTable.propTypes = {
  viewType: PropTypes.string, 
  handleSwitchView: PropTypes.func,
}
