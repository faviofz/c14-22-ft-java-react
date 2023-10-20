import { useState } from 'react';

import {
  ViewTable,
  Search,
  FilterGroup,
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
    <div className='flex flex-col gap-5'>
      <h1 className='mt-5 ml-5 text-5xl font-semibold text-slate-600'>Productos</h1>
      <main className='flex flex-col gap-3 px-5'>
        <ViewTable handleSwitchView={handleSwitchView} viewType={viewType} />
        <Search />
        <ModaladdProduct />
        <FilterGroup />
      </main>
      <section className='px-5'>
        {viewType === 'list' ? <Grid /> : <Card />}
      </section>
      <nav className='flex justify-center mb-5'>
        <Paginated />
      </nav>
      {/* <section className='flex flex-col items-center lg:flex-row lg:items-stretch'>
        <section className=' w-[100%]  px-4'>
          <h1 className="mt-5 text-5xl font-semibold text-slate-600 md:mt-0">
            Productos
          </h1>
          <section className='hidden md:block'>
            <main className='flex items-center justify-between px-3'>
              <div className='flex items-center gap-2'>
                <p>Vista</p>
                <button
                  onClick={() => handleSwitchView('list')}
                  className={ `${viewType === 'list' ? 'active bg-base-200' : 'transparent'} transition-all p-1 ease-in-out rounded-lg`}
                >
                  <img src={list} />
                </button>
                <button
                  onClick={() => handleSwitchView('cards')}
                  className={ `${viewType === 'cards' ? 'active bg-base-200' : 'transparent'} transition-all p-1 ease-in-out rounded-lg`}
                >
                  <img src={grid} />
                </button>
              </div>
              <div>
                <Search />
              </div>
              <ModaladdProduct />
            </main>
          </section>
          <section className='hidden mt-5 md:block'>
            <Filter />
          </section>
          <section>{viewType === 'list' ? <Grid /> : <Card />}</section>
          <nav className='flex justify-center mt-5'>
            <Paginated />
          </nav>
        </section>
      </section> */}
    </div>
  );
}
