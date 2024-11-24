'use client'
import Link from "next/link";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import Button from "../button/Button";
import { IoArrowBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
const LoginComp = () => {
    const router = useRouter();

    const handleBack=()=>{
      router.back();
    }
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px]">
       <div className="flex justify-start items-center w-[300px]">
       <IoArrowBack className="size-6" onClick={handleBack}/>
       <h1 className="text-2xl font-bold pl-[100px]">Login</h1>
       </div>
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-2 m-3 mt-[100px] w-[300px]"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 m-3  w-[300px] "
          />
          <IoEyeOutline className="absolute top-6 right-7 size-5" />
        </div>

        <Link href={"/login"}>
          <Button name="Login" className="text-white bg-violet-700" />
        </Link>
        <Link href={"/login"}>
          <p className="text-violet-700 font-semibold">Forgot Password?</p>
        </Link>
        <p className="text-gray-400 mt-3">
          Don’t have an account yet?
          <Link href={"/signup"}>
            {" "}
            <span className="text-violet-700 font-semibold">Sign Up</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginComp;
