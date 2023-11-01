import { Container, DataList } from '@/components';
import { SubtractStock } from './components';

export default function SubtractProducts() {
  return (
    <Container>
      <DataList
        title='Salidas de productos'
        element={<SubtractStock />}
      ></DataList>
    </Container>
  );
}
