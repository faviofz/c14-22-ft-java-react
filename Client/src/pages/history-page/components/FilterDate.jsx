import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function FilterDate({ onDateChange }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  
  const handleDateChange = (startDate, endDate) => {
    setStartDate(startDate);
    setEndDate(endDate);
    onDateChange(startDate, endDate);
  };

  return (
    <div className="flex items-center justify-between gap-5 ">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date, endDate)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="h-10 border input input-md lg:bg-base-200"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => handleDateChange(startDate, date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="h-10 border input input-md lg:bg-base-200"
      />
    </div>
  );
}
