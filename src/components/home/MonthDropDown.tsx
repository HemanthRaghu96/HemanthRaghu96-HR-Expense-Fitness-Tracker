"use client";
import React from "react";
interface MonthDropDownProps{
    months:string[]
    selectedMonth:string;
    handleMonthChange:(event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const MonthDropDown = ({
  months,
  selectedMonth,
  handleMonthChange,
}:MonthDropDownProps) => {
  return (
    <div>
      <select
        id="month-select"
        value={selectedMonth}
        onChange={handleMonthChange}
      >
        {months.map((month:string, index:number) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
     
    </div>
  );
};

export default MonthDropDown;
