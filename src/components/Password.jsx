import React from "react";
import { HiOutlineLockClosed } from "react-icons/hi";

const Password = () => {
  return (
    <div className="w-full flex items-center gap-3 bg-[#d5c9f5] px-6 rounded-xl my-2">
      <HiOutlineLockClosed className=" text-gray-500 text-xl cursor-pointer" />
      <input
        id="passwd"
        type="password"
        placeholder="Enter Password"
        className=" py-2 pl-3 bg-[#d5c9f5] outline-none w-[90%] placeholder-gray-500"
      />
    </div>
  );
};

export default Password;
