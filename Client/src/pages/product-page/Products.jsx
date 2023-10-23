import { useState } from 'react';

import {
  ViewTable,
  Search,
  FilterGroup,
  Filter,
  Grid,
  Card,
  Paginated,
  ModaladdProduct,
} from './components';

import { useWindowDimensions } from '@/hooks';

export default function Products() {
  const [viewType, setViewType] = useState('list');
  const handleSwitchView = view => {
    setViewType(view);
  };

  const { width } = useWindowDimensions();

  return (
    <div className='flex flex-col gap-5 px-5'>
      <div className='flex flex-row items-center justify-between mt-5'>
        <h1 className='text-5xl font-semibold text-secondary'>Productos</h1>
        <ViewTable handleSwitchView={handleSwitchView} viewType={viewType} />
      </div>

      {width <= 1023 ? (
        <section className='flex flex-col w-full gap-3 '>
          <Search />
          <div className='flex flex-col justify-between gap-3 sm:flex-row-reverse'>
            <ModaladdProduct />
            <FilterGroup />
          </div>
        </section>
      ) : (
        <section className='flex flex-col gap-5'>
          <div className='grid grid-cols-[1fr_208px] gap-5'>
            <Search />
            <ModaladdProduct />
          </div>
          <div className='flex gap-5'>
            <Filter />
          </div>
        </section>
      )}

      <section className='w-full h-full overflow-auto'>
        {viewType === 'list' ? <Grid /> : <Card />}
      </section>
      <nav className='flex justify-center mb-5'>
        <Paginated />
      </nav>
    </div>
  );
}
