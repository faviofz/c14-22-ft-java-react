import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { IconCal } from '@/assets/svg';

export function FilterDate({ onDateChange }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleDateChange = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
    onDateChange(startDate, endDate);
  };

  return (
    <div className='flex items-center justify-between gap-3 '>
      <DatePicker
        selected={startDate}
        onChange={date => handleDateChange(date, endDate)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className='h-10 flex-1 border input input-md sm:bg-base-200'
        showIcon
        icon={
          <IconCal className=' inset-0 m-auto mr-2 [&>path]:fill-secondary-content' />
        }
      />
      <DatePicker
        selected={endDate}
        onChange={date => handleDateChange(startDate, date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className='h-10 flex-1 border input input-md sm:bg-base-200'
        showIcon
        icon={
          <IconCal className=' inset-0 m-auto mr-2 [&>path]:fill-secondary-content' />
        }
      />
    </div>
  );
}

FilterDate.propTypes = {
  onDateChange: PropTypes.func,
};
