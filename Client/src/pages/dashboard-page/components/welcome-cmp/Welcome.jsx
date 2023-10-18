import { CalendarSVG, ClockSVG } from '@/assets/svg';
import PropTypes from 'prop-types';


Welcome.propTypes = {
    fullname: PropTypes.string
  };

export function Welcome({ fullname }) {
  return (
    <div className='flex flex-col items-center justify-between w-full gap-5 mt-4 lg:flex-row'>
      <h1 className='text-lg tracking-wider lg:text-2xl'>
        Bienvenido <span className='font-bold'>{fullname}</span>
      </h1>
      <div>
        <div className='flex items-center justify-end gap-5'>
          <CalendarSVG />
          <h3 className='text-xs lg:text-sm'>Viernes 6 de octubre</h3>
        </div>
        <div className='flex items-center justify-end gap-5'>
          <ClockSVG />
          <h3 className='text-xs lg:text-sm'>10:17 (ARG)</h3>
        </div>
      </div>
    </div>
  );
}
