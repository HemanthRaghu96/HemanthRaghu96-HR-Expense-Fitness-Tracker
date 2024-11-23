import { ButtonProp } from "@/utils/types/type";
import React from "react";

const Button = ({ name, color, bgColor }: ButtonProp) => {
  return (
    <div
      className={`bg-${bgColor} text-${color} border-1  rounded-lg px-4 py-2 w-[200px] text-center m-5 cursor-pointer   `}
    >
      <p className="text-lg font-bold">{name}</p>
    </div>
  );
};

export default Button;
