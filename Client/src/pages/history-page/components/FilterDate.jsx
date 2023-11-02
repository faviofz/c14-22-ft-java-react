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
    <div className="flex ">
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date, endDate)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        className="w-24 mr-2 p-2 rounded-md"
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => handleDateChange(startDate, date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        className="w-24  p-2 rounded-md"
      />
    </div>
  );
}
