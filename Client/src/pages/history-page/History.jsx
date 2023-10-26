import { DataList, Container, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { Table, Grid, Filters } from './components';

export default function History() {

  const handleSearch = query => {
    const filtered = providers.filter(product =>
      product.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div>
      <Container>
        <DataList
          title='Historial'
          setViewMode={viewModeType.TABLE}
          // element={<Table data={providers} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar historial' onNewValue={handleSearch} />
            
          </DataList.Header>
          <DataList.Filters>
            <Filters />
          </DataList.Filters>
        </DataList>
      </Container>
    </div>
  );
}
