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
        dateFormat="dd/MM/yyyy"
        onChange={date => handleDateChange(date, endDate)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className='flex-1 h-10 border input input-md sm:bg-base-200'
        showIcon
        icon={
          <IconCal className=' inset-0 m-auto mr-2 [&>path]:fill-secondary-content' />
        }
      />
      <DatePicker
        selected={endDate}
        dateFormat="dd/MM/yyyy"
        onChange={date => handleDateChange(startDate, date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className='flex-1 h-10 border input input-md sm:bg-base-200'
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
