import React, { useEffect } from 'react';
import { AccordionItem } from './components/AccordionItem';
import { BellSVG } from '@/assets/svg';
import { useProducts } from "../../hooks/useProducts";

export default function Notification() {
  const { products, getAllProducts } = useProducts();

  useEffect(() => {
    getAllProducts();
  }, []);

  const filteredProducts = products.filter(product => product.min > product.actual);

  return (
    <div className='flex flex-col items-center gap-5 justify-center w-full h-[80vh] overflow-auto'>
      <div className='flex gap-5 '>
        <BellSVG className='[&>path]:stroke-secondary-content' />
        <h1 className='text-3xl font-semibold tracking-wide '>Notificacion</h1>
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-5 p-5'>
        {filteredProducts.map((product, index) => (
          <AccordionItem
            key={index}
            title={`Falta Stock  ${product.nombre}`}
            description={`minimo:${product.min} actual:${product.actual}`}
          />
        ))}
      </div>
    </div>
  );
}
