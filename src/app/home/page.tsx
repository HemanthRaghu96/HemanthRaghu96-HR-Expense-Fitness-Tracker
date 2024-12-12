"use client";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
import { FaBell } from "react-icons/fa";
import MonthDropDown from "@/components/home/MonthDropDown";
import { IoArrowDownOutline } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
const Home = () => {
  // Array of months
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // State for the selected month
  const [selectedMonth, setSelectedMonth] = useState<string>("January");

  // Handler for dropdown change
  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      {/* Header */}
      <div className="flex justify-around items-center w-full">
        {/* Avatar */}
        <RxAvatar className="size-[30px] m-2 text-violet-500" />
        {/* Month */}
        <MonthDropDown
          months={months}
          selectedMonth={selectedMonth}
          handleMonthChange={handleMonthChange}
        />
        {/* Alert */}
        <FaBell className="size-[30px] m-2 text-violet-500" />
      </div>
      {/* Account Balance */}
      <div className="flex flex-col justify-center items-center mt-[10px]">
        <h4 className="mt-2  text-base text-gray-500">Account Balance</h4>
        <h1 className="mt-2 font-bold text-4xl">${}10000</h1>
      </div>
      {/* Income and Expense */}
      <div className="flex justify-center items-center mt-[20px]">
        <div className="flex justify-center items-center bg-green-600 py-2 px-4 rounded-lg mx-[10px]">
            {/* Icon */}
            <div className=" flex flex-col justify-center items-center px-5 py-2 bg-white m-2 rounded-lg"><IoArrowDownOutline />
            <GiMoneyStack className="size-8 text-green-500"/></div>
            <div className="m-2 text-white">
                <h3 className="text-sm">Income</h3>
                <p className="text-lg font-semibold">${}5000  </p>
            </div>
        </div>
        <div className="flex justify-center items-center bg-red-600 py-2 px-4 rounded-lg mx-[10px]">
            {/* Icon */}
            <div className=" flex flex-col justify-center items-center px-5 py-2 bg-white m-2 rounded-lg"><IoArrowUp />
            <GiMoneyStack className="size-8 text-red-500"/></div>
            <div className="m-2 text-white">
                <h3 className="text-sm">Expense</h3>
                <p className="text-lg font-semibold">${}5000  </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
