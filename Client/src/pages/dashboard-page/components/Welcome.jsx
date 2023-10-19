import { CalendarSVG, ClockSVG } from '@/assets/svg';
import PropTypes from 'prop-types';

Welcome.propTypes = {
  fullname: PropTypes.string,
};

export function Welcome({ fullname }) {
  return (
    <div className='flex flex-col gap-5 mt-4 mb-5 min-[500px]:flex-row  lg:flex-row lg:items-center lg:justify-between'>
      <h1 className='text-lg tracking-wider lg:text-2xl flex gap-x-2 min-[500px]:flex-col min-[700px]:flex-row'>
        <span>Bienvenido</span>
        <span className='font-bold'>{fullname}</span>
      </h1>
      <div className='flex justify-between min-[500px]:flex-col min-[500px]:justify-center min-[500px]:items-end min-[500px]:flex-1 [&>div]:flex [&>div]:items-center [&>div]:gap-2 [&>div>h3]:text-xs'>
        <div>
          <CalendarSVG />
          <h3>Viernes 6 de octubre</h3>
        </div>
        <div>
          <ClockSVG />
          <h3>10:17 (ARG)</h3>
        </div>
      </div>
    </div>
  );
}
