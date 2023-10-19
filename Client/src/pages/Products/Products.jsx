import { useState } from 'react';

import Navbar from '../../components/navbar-cmp/Navbar';
import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';
import Grid from './Components/Grid/Grid';
import Card from '../Products/Components/Card/Card';
import Paginated from './Components/Paginated/Paginated.JSX';

import list from '../../assets/svg/Lista-vista.svg';
import grid from '../../assets/svg/Cuadrado-vista.svg';
import Broza from '../../assets/svg/boton-rosa.svg';

export function Products() {
  const [viewType, setViewType] = useState('list');

  const handleSwitchView = view => {
    setViewType(view);
  };

  return (
    <div>
      <section className='flex flex-col items-center lg:flex-row lg:items-stretch'>
        <Navbar />
        <section className=' w-[100%] mt-16 px-4'>
          <h1 className="text-slate-600 text-[32px] font-semibold font-['Inter']">
            Productos
          </h1>
          <main className='flex items-center justify-between px-3'>
            <div className='flex items-center gap-2'>
              <p>Vista</p>
              <button
                onClick={() => handleSwitchView('list')}
                className={viewType === 'list' ? 'active' : ''}
                style={{
                  background: viewType === 'list' ? '#c8e4ed' : 'transparent',
                  transition: 'background-color 0.3s',
                }}
              >
                <img src={list} />
              </button>

              <button
                onClick={() => handleSwitchView('cards')}
                className={viewType === 'cards' ? 'active' : ''}
                style={{
                  background: viewType === 'cards' ? '#c8e4ed' : 'transparent',
                }}
              >
                <img src={grid} />
              </button>
            </div>
            <div>
              <Search />
            </div>
            <div>
              <button className='flex items-center'>
                <img src={Broza} />
                AgregarProducto
              </button>
            </div>
          </main>
          <section className='mt-5'>
            <Filter />
          </section>
          <section>{viewType === 'list' ? <Grid /> : <Card />}</section>
          <nav className="flex justify-center mt-5">
            <Paginated />
          </nav>
        </section>
      </section>
    </div>
  );
}
