import { AccordionItem } from './components/AccordionItem';
import { BellSVG } from '@/assets/svg';

export default function Notification() {
  return (
    <div className='flex flex-col items-center gap-5 justify-center w-full h-[80vh] overflow-auto'>
      <div className='flex gap-5'>
        <BellSVG className='[&>path]:stroke-secondary-content' />
        <h1 className='text-3xl font-semibold tracking-wide '>Notificacion</h1>
      </div>
      <div className='flex flex-col items-center justify-center w-full gap-5 p-5'>
        <AccordionItem
          title={'Falta de Stock - Coca Cola 2lt'}
          description={'minimo:10 actual:3'}
        />
        <AccordionItem
          title={'Vencimiento de producto - Leche entera'}
          description={'Fecha de vencimineto: 20/10/2023'}
        />
        <AccordionItem
          title={'notification 3'}
          description={'notification 3'}
        />
        <AccordionItem
          title={'notification 4'}
          description={'notification 4'}
        />
        <AccordionItem
          title={'notification 5'}
          description={'notification 6'}
        />
      </div>
    </div>
  );
}
