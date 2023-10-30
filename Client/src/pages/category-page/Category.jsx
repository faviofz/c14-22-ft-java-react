import { useEffect } from 'react';
import { DataList, Container, Search, Paginated, Button } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { useCategories, usePaginated, useModal } from '@/hooks';
import { FormCategory, Table } from './components';
import './category-page.scss';

export default function Category() {
  const { categories, getAllCategories } = useCategories();
  const { openModal } = useModal();
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
            <Button
              className='gap-3 lg:w-52 btn btn-primary md:w-80'
              onClick={() =>
                openModal(<FormCategory />, {
                  title: 'Nueva Categoría',
                  className: 'modal-category',
                })
              }
            >
              <PlusIcon width='15' />
              Nueva Categoría
            </Button>
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
