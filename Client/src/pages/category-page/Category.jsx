import { useEffect, useState } from 'react';
import { DataList, Container, Modal, Search, Paginated } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { useCategories } from '@/hooks/';
import { Created, Table } from './components';
import './category-page.scss';

export default function Category() {
  const { categories, getAllCategories } = useCategories();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    setFilteredCategories(categories);
  }, [categories]);

  const handleSearch = query => {
    const filtered = categories.filter(({ name }) =>
      name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCategories = filteredCategories.slice(startIndex, endIndex);

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Categoría'
          setViewMode={viewModeType.TABLE}
          element={<Table data={displayedCategories} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar categoría' onNewValue={handleSearch} />
            <Modal
              title='Nueva Categoría'
              buttonLabel='Nueva Categoría'
              buttonIcon={<PlusIcon width='15' />}
            >
              <Created />
            </Modal>
          </DataList.Header>
          {/* <DataList.Filters>filters group</DataList.Filters> */}
        </DataList>
        <Paginated
          currentPage={currentPage}
          totalPages={Math.ceil(filteredCategories.length / itemsPerPage)}
          onPageChange={setCurrentPage}
        />
      </Container>
    </div>
  );
}
