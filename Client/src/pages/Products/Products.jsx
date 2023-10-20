import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchProducts } from '../../redux/reducers';

import Search from './Components/Search/Search';
import Filter from './Components/Filter/Filter';
import Grid from './Components/Grid/Grid';
import Card from '../Products/Components/Card/Card';
import Paginated from './Components/Paginated/Paginated.jsx';

import list from '../../assets/svg/Lista-vista.svg';
import grid from '../../assets/svg/Cuadrado-vista.svg';
import Broza from '../../assets/svg/boton-rosa.svg';

export function Products() {
  // const dispatch =useDispatch()
  // const products = useSelector((state) => state.products.products);

  // console.log(products)

  // useEffect(() => {
  //   dispatch(fetchProducts());
  // }, [dispatch]);

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    fetch('http://inexpensive-action-production.up.railway.app/productos')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(error => console.error(error));
  }, []);

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
              <div>
                <button
                  onClick={() =>
                    document.getElementById('my_modal_3').showModal()
                  }
                >
                  <button className='flex items-center '>
                    <img className='hover:scale-[1.1]' src={Broza} />
                    AgregarProducto
                  </button>
                </button>
                <dialog id='my_modal_3' className='modal'>
                  <div className='modal-box'>
                    <form method='dialog'>
                    <section>
                    <section>
                      <div>
                        <label>Nombre</label>
                        <input
                          type='text'
                          placeholder='Type here'
                          className='input input-bordered w-full max-w-xs'
                        />
                      </div>
                      <div>
                        <label>Precio</label>
                        <input
                          type='text'
                          placeholder='Type here'
                          className='input input-bordered w-full max-w-xs'
                        />
                      </div>
                      </section>
                      </section>
                    </form>
                  </div>
                </dialog>
              </div>
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
