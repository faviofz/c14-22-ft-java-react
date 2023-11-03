import { CalendarSVG, ClockSVG } from '@/assets/svg';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

export function Welcome() {
  const { authState } = useAuth();

  useEffect(() => {}, []);

  return (
    <div className='flex flex-col gap-5 mt-4 mb-5 min-[500px]:flex-row  lg:flex-row lg:items-center lg:justify-between'>
      <h1 className='text-lg tracking-wider lg:text-2xl flex gap-x-2 min-[500px]:flex-col min-[700px]:flex-row'>
        <span>Bienvenido</span>
        <span className='font-bold capitalize'>
          {authState.loading
            ? '...'
            : `${authState?.user?.name} ${authState?.user?.surname}`}
        </span>
      </h1>
      <div className='flex justify-between min-[500px]:flex-col min-[500px]:justify-center min-[500px]:items-end min-[500px]:flex-1 [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div>h3]:text-xs'>
        <div>
          <CalendarSVG className='[&>path]:stroke-secondary-content' />
          <h3>
            {new Date().toLocaleDateString('es', {
              weekday: 'long',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </h3>
        </div>
        <div>
          <ClockSVG className='[&>path]:stroke-secondary-content' />
          <h3>
            {
              // tiene que actualizarse la hora
              new Date().toLocaleTimeString('es', {
                hour: '2-digit',
                minute: '2-digit',
              })
            }
          </h3>
        </div>
      </div>
    </div>
  );
}
