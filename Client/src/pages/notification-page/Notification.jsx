import React, { useEffect } from 'react';
import { AccordionItem } from './components/AccordionItem';
import { BellSVG } from '@/assets/svg';
import { useProducts } from '../../hooks/useProducts';

export default function Notification() {
  const { products, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts = products.filter(
    product => product.min > product.actual
  );

  return (
    <div className='flex flex-col items-center justify-center w-full gap-5 notification-component'>
      <div className='flex items-center gap-5'>
        <BellSVG className='[&>path]:fill-secondary-content h-7 w-7' />
        <h1 className='text-3xl font-semibold tracking-wide '>Notificacion</h1>
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-5 p-5'>
        {filteredProducts.map((product, index) => (
          <AccordionItem
            key={index}
            title={`Falta Stock  ${product.nombre}`}
            description1={`Minimo: ${product.min}`}
            description2={`Actual: ${product.actual}`}
          />
        ))}
      </div>
    </div>
  );
}
