import { DataList, Container, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { Table,  Filters } from './components';
import {useMovements} from '@/hooks'
import { useEffect ,useState} from 'react';

export default function History() {
  const { movements, getAllMovements } = useMovements();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState(''); 
  const [filteredMovements, setFilteredMovements] = useState([]);

  useEffect(() => {
    getAllMovements();
  }, []);

  useEffect(() => {
    
    const descriptionFiltered = movements.filter((movement) =>
      movement.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const typeFiltered = filterType
      ? descriptionFiltered.filter((movement) => movement.tipo === filterType)
      : descriptionFiltered;

    setFilteredMovements(typeFiltered);
  }, [searchQuery, movements, filterType]);

  console.log(filteredMovements);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleFilterType = (selectedType) => {
    setFilterType(selectedType);
  };

  return (
    <div>
      <Container>
        <DataList
          title="Historial"
          setViewMode={viewModeType.TABLE}
          element={<Table data={filteredMovements} />}
        >
          <DataList.Header>
            <Search placeholder="Buscar historial" onNewValue={handleSearch} />
          </DataList.Header>
          <DataList.Filters>
            <Filters onFilterType={handleFilterType} />
          </DataList.Filters>
        </DataList>
      </Container>
    </div>
  );
}