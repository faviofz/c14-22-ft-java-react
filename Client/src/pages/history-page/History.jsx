import { DataList, Container, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { Table, Grid, Filters } from './components';
import {useMovements} from '@/hooks'
import { useEffect } from 'react';

export default function History() {
 const { movements, getAllMovements} = useMovements()

 useEffect(() => {
  getAllMovements()
 }, [])
//  console.log(movements)
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
          element={<Table data={movements} />}
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
