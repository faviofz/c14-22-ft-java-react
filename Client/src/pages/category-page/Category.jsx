import { DataList, Container, Modal, Search } from '@/components';
import { PlusIcon } from '@/assets/svg';
import { viewModeType } from '@/components/datalist-cmp/constants';
import './category-page.scss';

export function Category() {
  const handleSearch = newCategory => {
    console.log(newCategory);
  };
  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Categoría'
          data=''
          setViewMode={viewModeType.TABLE}
          table='table component'
          grid='grid component'
          element='default component'
        >
          <DataList.Header>
            <Search placeholder='Buscar producto' onNewValue={handleSearch} />
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
