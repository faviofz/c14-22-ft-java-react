import { useEffect } from 'react';
import { DataList, Container, Modal, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { PlusIcon } from '@/assets/svg';
import { Table, Grid, Filters, FormProduct } from './components';
import { useProducts } from './../../hooks/useProducts';

export default function Product() {
  const { products, getAllProducts } = useProducts();
  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = query => {
    console.log(query);
  };

  return (
    <div className='category-page'>
      <Container>
        <DataList
          title='Productos'
          setViewMode={viewModeType.TABLE}
          table={<Table data={products} />}
          grid={<Grid data={products} />}
          // element='generic component'
        >
          <DataList.Header>
            <Search placeholder='Buscar producto' onNewValue={handleSearch} />
            <Modal
              title='Nuevo Producto'
              buttonLabel='Nuevo Producto'
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
