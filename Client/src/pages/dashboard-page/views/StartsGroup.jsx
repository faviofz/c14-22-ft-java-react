import { Stat } from '../components';
import {
  IconProductSVG,
  DocumentReportSVG,
  RefreshSVG,
  TruckSVG,
} from '@/assets/svg';

export function StartsGroup() {
  return (
    <div className='starts-group box-border w-full flex flex-col justify-center gap-5'>
      <Stat title='Productos' stat={31} Icon={IconProductSVG} />
      <Stat title='Stock' stat={1.2} Icon={DocumentReportSVG} />
      <Stat title='Proveedor' stat={5} Icon={TruckSVG} />
      <Stat title='Historial' stat={5.8} Icon={RefreshSVG} />
    </div>
  );
}
