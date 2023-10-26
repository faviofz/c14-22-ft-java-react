import { Table, FormProduct } from './components';
import React, { useEffect, useState } from 'react';
import { DataList, Container, Modal, Search, Paginated } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { useProviders } from '@/hooks';
import './provider-page.scss';

export default function Provider() {
  const { providers, getAllProviders } = useProviders();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [filteredProviders, setFilteredProviders] = useState(providers);

  useEffect(() => {
    getAllProviders();
  }, []);

  useEffect(() => {
    setFilteredProviders(providers);
  }, [providers]);

  const handleSearch = query => {
    const filtered = providers.filter(({ nombre }) =>
      nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProviders(filtered);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProviders = filteredProviders.slice(startIndex, endIndex);

  return (
    <div className='provider-page'>
      <Container>
        <DataList
          title='Proveedor'
          setViewMode={viewModeType.TABLE}
          element={<Table data={displayedProviders} />}
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
          {/* <DataList.Filters>
            <Filters />
          </DataList.Filters> */}
        </DataList>
        <Paginated
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProviders.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </Container>
    </div>
  );
}
