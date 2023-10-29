import { useEffect } from 'react';
import { DataList, Container, Modal, Search, Paginated } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { useCategories, usePaginated } from '@/hooks';
import { FormCategory, Table } from './components';
import './category-page.scss';

export default function Category() {
  const { categories, getAllCategories } = useCategories();
  const { setFiltered, displayed, currentPage, totalPages, setCurrentPage } =
    usePaginated({ data: categories, numItems: 10 });

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleSearch = query => {
    const filtered = categories.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filtered);
  };

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Categoría'
          setViewMode={viewModeType.TABLE}
          element={<Table data={displayed} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar categoría' onNewValue={handleSearch} />
            <Modal
              title='Nueva Categoría'
              buttonLabel='Nueva Categoría'
              buttonIcon={<PlusIcon width='15' />}
            >
              <FormCategory />
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
