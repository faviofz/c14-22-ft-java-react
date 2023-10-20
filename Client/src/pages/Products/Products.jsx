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
} from '@/pages/Products/components';

export function Products() {
  const [viewType, setViewType] = useState('list');
  const handleSwitchView = view => {
    setViewType(view);
  };
  return (
    <div className='flex flex-col gap-5 px-5'>
      <div className='flex flex-row items-center justify-between mt-5'>
        <h1 className='text-5xl font-semibold text-slate-600'>Productos</h1>
        <ViewTable handleSwitchView={handleSwitchView} viewType={viewType} />
      </div>

      <section className='flex flex-col w-full gap-3 '>
        <Search />
        <div className='flex flex-col justify-between gap-3 sm:flex-row-reverse'>
          <ModaladdProduct />
          <FilterGroup />
        </div>
      </section>

      {/* <section className='flex flex-col gap-5'>
        <div className='grid grid-cols-[1fr_208px] gap-5'>
          <Search />
          <ModaladdProduct />
        </div>
        <div className='flex gap-5'>
          <Filter />
        </div>
      </section> */}

      <section>{viewType === 'list' ? <Grid /> : <Card />}</section>
      <nav className='flex justify-center mb-5'>
        <Paginated />
      </nav>
    </div>
  );
}
