import { useState } from 'react';

import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';
import Grid from './Components/Grid/Grid';
import Card from '../Products/Components/Card/Card';
import Paginated from './Components/Paginated/Paginated.jsx';

/* import de las vistas */
import list from '../../assets/svg/Lista-vista.svg';
import grid from '../../assets/svg/Cuadrado-vista.svg';

/* import del Modal */
import ModaladdProduct from './Components/modal/ModaladdProduct';

export function Products() {
  
  /* Funcion para el Cambio de Vistas */
  const [viewType, setViewType] = useState('list');
  const handleSwitchView = view => {
    setViewType(view);
  };

  return (
    <div>
      <section className='flex flex-col items-center lg:flex-row lg:items-stretch'>
        <section className=' w-[100%]  px-4'>
          <h1 className="text-slate-600 mt-5 md:mt-0 text-[50px] font-semibold font-['Inter']">
            Productos
          </h1>
          <section className='hidden md:block'>
            <main className='flex items-center  justify-between px-3'>
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
                    background:
                      viewType === 'cards' ? '#c8e4ed' : 'transparent',
                  }}
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
          <section className='mt-5 hidden md:block'>
            <Filter />
          </section>
          <section>{viewType === 'list' ? <Grid /> : <Card />}</section>
          <nav className='flex justify-center mt-5'>
            <Paginated />
          </nav>
        </section>
      </section>
    </div>
  );
}
