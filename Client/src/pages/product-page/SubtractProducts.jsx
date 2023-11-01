import { useProducts, usePaginated } from '@/hooks';
import { Container, DataList, Search } from '@/components';
import { SubtractStock } from './components';

export default function SubtractProducts() {
  const { products } = useProducts();
  const { setFiltered, displayed } = usePaginated({
    data: products,
    numItems: 100,
  });

  const handleSearch = query => {
    const filtered = products.filter(({ nombre }) =>
      nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(filtered);
  };
  return (
    <Container>
      <DataList
        title='Salidas de productos'
        element={
          <SubtractStock
            data={displayed.filter(p => p.actual > 0)}
            setFiltered={setFiltered}
          />
        }
      >
        <DataList.Header>
          <Search placeholder='Buscar producto' onNewValue={handleSearch} />
        </DataList.Header>
      </DataList>
    </Container>
  );
}
