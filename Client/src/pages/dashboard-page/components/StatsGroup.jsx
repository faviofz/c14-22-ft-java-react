import { Stat } from '../components';
import {
  ProductIcon,
  StockIcon,
  ProviderIcon,
  HistoricalIcon,
} from '@/assets/svg';

export function StatsGroup() {
  return (
    <div className='box-border flex flex-col justify-center w-full gap-5 starts-group mb-5'>
      <Stat title='Productos' stat={31} Icon={ProductIcon} />
      <Stat title='Stock' stat={1.2} Icon={StockIcon} />
      <Stat title='Proveedor' stat={5} Icon={ProviderIcon} />
      <Stat title='Historial' stat={5.8} Icon={HistoricalIcon} />
    </div>
  );
}
