import { Table, Grid, Filters, FormProduct } from './components';
import React, { useEffect, useState } from 'react';
import { DataList, Container, Modal, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { useProviders } from '@/hooks';

export default function Provider() {
  const { providers, getAllProviders } = useProviders();

  useEffect(() => {
    getAllProviders();
  }, []);

  const handleSearch = query => {
    const filtered = providers.filter(product =>
      product.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Proveedor'
          setViewMode={viewModeType.TABLE}
            element={<Table data={providers} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar proveedor' onNewValue={handleSearch} />
            <Modal
              title='Nuevo Proveedor'
              buttonLabel='Nuevo Proveedor'
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
