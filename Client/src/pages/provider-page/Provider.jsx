import { Table, FormProduct } from './components';
import React, { useEffect } from 'react';
import { DataList, Container, Modal, Search, Paginated } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { useProviders, usePaginated } from '@/hooks';
import './provider-page.scss';

export default function Provider() {
  const { providers, getAllProviders } = useProviders();
  const { setFiltered, displayed, currentPage, totalPages, setCurrentPage } =
    usePaginated({ data: providers, numItems: 10 });

  useEffect(() => {
    getAllProviders();
  }, []);

  const handleSearch = query => {
    const filtered = providers.filter(({ nombre }) =>
      nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <div className='provider-page'>
      <Container>
        <DataList
          title='Proveedor'
          setViewMode={viewModeType.TABLE}
          element={<Table data={displayed} />}
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
          {/* <DataList.Filters>filters group</DataList.Filters> */}
        </DataList>
        {totalPages > 1 && (
          <Paginated
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </div>
  );
}
