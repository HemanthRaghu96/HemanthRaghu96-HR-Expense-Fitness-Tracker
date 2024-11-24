import Link from "next/link";
import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import Button from "../button/Button";
import Image from "next/image";
const SignUpComp = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mt-[50px]">
        <h1 className="text-2xl font-bold">Sign up</h1>
        <input
          type="text"
          placeholder="Name"
          className="border border-gray-300 rounded-lg px-4 py-2 m-3 mt-[50px]  w-[300px]"
        />
        <input
          type="text"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-2 m-3  w-[300px]"
        />

        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 m-3  w-[300px] "
          />
          <IoEyeOutline className="absolute top-6 right-7 size-5" />
        </div>
        <div className="flex justify-center items-center m-2">
          <input
            type="checkbox"
            className="accent-violet-700 border border-violet-700 rounded size-6 mx-2"
          />
          <p className="m-2 font-semibold">
            By signing up, you agree to the <br />
            <span className="text-violet-700">
              Terms of Service and Privacy Policy
            </span>
          </p>
        </div>
        <Link href={"/signup"}>
          <Button name="Sign Up" className="text-white bg-violet-700" />
        </Link>
        <p className="text-gray-400 font-semibold">Or with</p>

        <Link href={"/signup"}>
          <div className="text-black border-gray-300 border font-semibold rounded-lg px-4 py-2 w-[300px] text-center m-5 cursor-pointer relative pl-10">
            Sign Up with Google
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/36px-Google_%22G%22_logo.svg.png?20230822192911"
              alt="google logo"
              width={20}
              height={20}
              className="inline ml-2 absolute top-[10px] left-12 "
            />
          </div>
        </Link>
        <p className="text-gray-400">
          Already have an account?
          <Link href={"/login"}>
            {" "}
            <span className="text-violet-700">Login</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignUpComp;
