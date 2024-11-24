import { ButtonProp } from "@/utils/types/type";
import React from "react";

const Button = ({ name, className }: ButtonProp) => {
  return (
    <div
      className={`${className} border-1  rounded-lg px-4 py-2 w-[300px] text-center m-5 cursor-pointer   `}
    >
      <p className="text-lg font-bold">{name}</p>
    </div>
  );
};

export default Button;
