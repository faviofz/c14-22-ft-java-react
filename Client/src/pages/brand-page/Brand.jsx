import { useEffect } from 'react';
import { Container, DataList, Search, Paginated, Button } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { useBrands, usePaginated, useModal } from '@/hooks';
import { FormBrand, Table } from './components';
import './brand-page.scss';

export default function Brand() {
  const { brands, getAllBrands } = useBrands();
  const { openModal } = useModal();
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
            <Button
              className='gap-3 lg:w-52  btn btn-primary md:w-80'
              onClick={() =>
                openModal(<FormBrand />, {
                  title: 'Nueva Marca',
                  className: 'modal-brand',
                })
              }
            >
              <PlusIcon width='15' />
              Nueva Marca
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
