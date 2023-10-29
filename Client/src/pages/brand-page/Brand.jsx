import { useEffect } from 'react';
import { Container, DataList, Modal, Search, Paginated } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { useBrands, usePaginated } from '@/hooks';
import { FormBrand, Table } from './components';
import './brand-page.scss';

export default function Brand() {
  const { brands, getAllBrands } = useBrands();
  const { setFiltered, displayed, currentPage, totalPages, setCurrentPage } =
    usePaginated({ data: brands, numItems: 10 });

  useEffect(() => {
    getAllBrands();
  }, []);

  const handleSearch = query => {
    const filtered = brands.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <div className='brand-page'>
      <Container>
        <DataList
          title='Marca'
          setViewMode={viewModeType.TABLE}
          element={<Table data={displayed} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar categoría' onNewValue={handleSearch} />
            <Modal
              title='Nueva Marca'
              buttonLabel='Nueva Marca'
              buttonIcon={<PlusIcon width='15' />}
            >
              <FormBrand />
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
