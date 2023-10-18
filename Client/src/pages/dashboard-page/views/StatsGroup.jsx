import { Stat } from '../components';
import {
  IconProductSVG,
  DocumentReportSVG,
  RefreshSVG,
  TruckSVG,
} from '@/assets/svg';

export function StatsGroup() {
  return (
    <div className='box-border flex flex-col justify-center w-full gap-5 starts-group'>
      <Stat title='Productos' stat={31} Icon={IconProductSVG} />
      <Stat title='Stock' stat={1.2} Icon={DocumentReportSVG} />
      <Stat title='Proveedor' stat={5} Icon={TruckSVG} />
      <Stat title='Historial' stat={5.8} Icon={RefreshSVG} />
    </div>
  );
}
