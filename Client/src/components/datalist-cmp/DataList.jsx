import PropTypes from 'prop-types';
import { useState } from 'react';
import { SwitchViewMode } from './components';
import { viewModeType } from './constants';
import './datalist-cmp.scss';

function DataListFilters({ children }) {
  return (
    <div className='datalist-component-header-bottom'>
      <label htmlFor='filters' className='w-full btn btn-accent'>
        Filtros
      </label>
      <input type='checkbox' name='filters' id='filters' />
      <div className='filters-container'>{children}</div>
    </div>
  );
}
DataListFilters.propTypes = {
  children: PropTypes.node,
};

function DataListHeader({ children }) {
  return <div className='datalist-component-header-middle'>{children}</div>;
}
DataListHeader.propTypes = {
  children: PropTypes.node,
};

export function DataList({
  children,
  title,
  setViewMode,
  element,
  grid,
  table,
  loading = false,
}) {
  const [viewType, setViewType] = useState(
    s => setViewMode ?? viewModeType.TABLE
  );
  return (
    <section className='datalist-component'>
      <header className='datalist-component-header'>
        <div className='datalist-component-header-top'>
          <h1 className='text-5xl font-semibold text-secondary'>{title}</h1>
          {!element && (
            <SwitchViewMode currentType={viewType} handleChange={setViewType} />
          )}
        </div>
        {children}
      </header>
      <div className='datalist-component-content'>
        {element || undefined}
        {viewModeType.TABLE === viewType &&
          !element &&
          (loading ? 'cargando table...' : table)}
        {viewModeType.GRID === viewType &&
          !element &&
          (loading ? 'cargando table...' : grid)}
      </div>
    </section>
  );
}

DataList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  setViewMode: PropTypes.string,
  loading: PropTypes.bool,
  element: PropTypes.node,
  grid: PropTypes.node,
  table: PropTypes.node,
};

DataList.Header = DataListHeader;
DataList.Filters = DataListFilters;

/* 
<Search />
      <Modal title='Nueva Categoría'>contenido del modal</Modal>
*/
