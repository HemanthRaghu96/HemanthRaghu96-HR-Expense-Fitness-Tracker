import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import Link from "next/link";

const OnBoardComp = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="mt-[100px]">
          <Image
            src="https://media.gettyimages.com/id/200550635-001/vector/man-holding-handful-of-us-paper-currency-smiling.jpg?s=612x612&w=0&k=20&c=deNN9boUK1RqxpBuO7h7b1HK8Jxij2kXMnKYDnAlGLw="
            alt="Signup Image"
            width={150}
            height={100}
            style={{ width: 'auto', height: 'auto' }}
            priority 
          />
        </div>

        <div className="mt-2">
          <h1 className="text-4xl font-bold m-3">
            Gain total control of your money
          </h1>
          <p className="text-xl text-gray-400 m-3">
            Become your own money manager and make every cent count
          </p>
        </div>
        <div className="mt-2">
          <Link href={"/signup"}>
            <Button name="Sign Up" className="text-white bg-violet-700" />
          </Link>
          <Link href={"/login"}>
            {" "}
            <Button name="Login" className="text-violet-700 bg-violet-100"  />
          </Link>
        </div>
      </div>
    </>
  );
};

export default OnBoardComp;
