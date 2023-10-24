import { DataList, Container, Modal, Search } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import './category-page.scss';

export default function Category() {
  const handleSearch = query => {
    console.log(query);
  };

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Categoría'
          setViewMode={viewModeType.TABLE}
          table='table component'
          grid='grid component'
          element='generic component'
        >
          <DataList.Header>
            <Search placeholder='Buscar categoría' onNewValue={handleSearch} />
            <Modal
              title='Nueva Categoría'
              buttonLabel='Nueva Categoría'
              buttonIcon={<PlusIcon width='15' />}
            >
              contenido del modal
            </Modal>
          </DataList.Header>
          <DataList.Filters>filters group</DataList.Filters>
        </DataList>
      </Container>
    </div>
  );
}
