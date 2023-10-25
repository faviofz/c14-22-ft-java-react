import React, { useEffect, useState } from 'react';
import { DataList, Container, Modal, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { Table, Grid, Filters, FormProduct } from './components';
import { useProducts } from './../../hooks/useProducts';

export default function Product() {
  const { products, getAllProducts } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = query => {
    const filtered = products.filter(product =>
      product.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Productos'
          setViewMode={viewModeType.TABLE}
          table={<Table data={filteredProducts} />}
          // grid={<Grid data={filteredProducts} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar producto' onNewValue={handleSearch} />
            <Modal
              title='Nuevo Producto'
              buttonLabel='Nuevo Producto'
              buttonIcon={<PlusIcon width='15' />}
            >
              <FormProduct />
            </Modal>
          </DataList.Header>
          <DataList.Filters>
            <Filters />
          </DataList.Filters>
        </DataList>
      </Container>
    </div>
  );
}
