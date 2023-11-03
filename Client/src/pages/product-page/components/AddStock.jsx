import { useState, useEffect } from 'react';
import { useProducts } from '@/hooks';
import { MenuSkeleton } from '@/components';
import { AddStockTable } from './AddStockTable';
import '../product-page.scss';
import { ProviderIcon, InfoIcon } from '@/assets/svg';

export function AddStock() {
  const { products, loading, getAllProducts } = useProducts();
  const [productsNoStock, setProductsNoStock] = useState([]);
  const [show, setShow] = useState(true);

  const noStockFiltered = products
    .filter(product => product.actual < product.min)
    .reduce((prev, current) => {
      return {
        ...prev,
        [current.proveedor.nombre]: !prev[current.proveedor.nombre]
          ? [current]
          : [...prev[current.proveedor.nombre], current],
      };
    }, {});

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleClick = provider => e => {
    setProductsNoStock(noStockFiltered[provider]);
    setShow(false);
  };

  return (
    <div
      className={`add-stock-page flex flex-col pt-[1rem] min-[800px]:flex-row min-[800px]:gap-2 ${
        show ? 'open' : ''
      }`}
    >
      <div className='add-stock-page-menu flex flex-col gap-2 min-[800px]:pt-[4rem] min-[800px]:min-w-[12rem]'>
        {loading ? (
          <MenuSkeleton />
        ) : (
          <>
            <h3 className='text-[1rem] pb-2'>Selecciona un proveedor</h3>
            {Object.keys(noStockFiltered).map(provedor => (
              <button
                key={provedor}
                onClick={handleClick(provedor)}
                className='btn min-[800px]:justify-start'
              >
                {provedor}
                <div className='badge bg-primary text-base-100'>
                  {noStockFiltered[provedor].length}
                </div>
              </button>
            ))}
          </>
        )}
      </div>
      <div className='add-stock-page-content pt-5 min-[800px]:flex-1'>
        {productsNoStock.length ? (
          <>
            <button
              className='btn-select-provider btn btn-primary btn-block'
              onClick={() => setShow(true)}
            >
              <ProviderIcon className='[&>path]:fill-[white] w-[1.2rem] h-[1.2rem]' />
              Selecciona un proveedor
            </button>
            <h3 className='text-[1.5rem] pt-5 pb-2 flex items-center gap-3 pl-5'>
              Productos de {productsNoStock[0].proveedor.nombre}
            </h3>
            <AddStockTable
              data={productsNoStock}
              handleShow={setShow}
              setProductsNoStock={setProductsNoStock}
            />
          </>
        ) : (
          <div className='flex flex-col items-center justify-center pt-[3rem] pb-[3rem] text-[1rem] text-center'>
            <InfoIcon className='w-[2rem] h-[2rem] mb-3 [&>path]:fill-secondary-content' />
            Seleccione un proveedor
            <br />
            para registrar un pedido
          </div>
        )}
      </div>
    </div>
  );
}
