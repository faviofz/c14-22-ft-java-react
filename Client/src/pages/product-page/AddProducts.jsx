import { Container, DataList } from '@/components';
import { AddStock } from './components/AddStock';

export default function AddProducts() {
  return (
    <Container>
      <DataList title='Entradas de productos' element={<AddStock />}></DataList>
    </Container>
  );
}
