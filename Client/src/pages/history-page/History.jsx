import { DataList, Container, Search } from '@/components';
import { viewModeType } from '@/components/datalist-cmp/constants';
import { Table, Filters } from './components';
import { useMovements } from '@/hooks';
import { useEffect, useState } from 'react';
import { FilterDate } from './components/FilterDate';

export default function History() {
  const { movements, getAllMovements } = useMovements();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filteredMovements, setFilteredMovements] = useState([]);
  const [startDate, setStartDate] = useState(new Date('01/01/2023'));
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    getAllMovements();
  }, []);

  useEffect(() => {
    const descriptionFiltered = movements.filter(movement =>
      movement.descripcion.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const typeFiltered = filterType
      ? descriptionFiltered.filter(movement => movement.tipo === filterType)
      : descriptionFiltered;

    const dateFiltered = typeFiltered.filter(movement => {
      const movementDate = new Date(movement.fecha_asiento);
      return movementDate >= startDate && movementDate <= endDate;
    });

    setFilteredMovements(dateFiltered);
  }, [searchQuery, movements, filterType, startDate, endDate]);

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleFilterType = selectedType => {
    setFilterType(selectedType);
  };

  const handleDateChange = (start, end) => {
      setStartDate(start);
      setEndDate(end);
  };

  return (
    <div>
      <Container>
        <DataList
          title='Historial'
          setViewMode={viewModeType.TABLE}
          element={<Table data={filteredMovements} />}
        >
          <DataList.Header>
            <Search placeholder='Buscar historial' onNewValue={handleSearch} />
          </DataList.Header>
          <DataList.Filters>
            <div className='flex flex-col lg:flex-row'>
              <Filters onFilterType={handleFilterType}>
                <FilterDate onDateChange={handleDateChange} />
              </Filters>
            </div>
          </DataList.Filters>
        </DataList>
      </Container>
    </div>
  );
}
