import React from "react";

const Button = () => {
  return (
    <input
      type="submit"
      value="SIGN IN"
      id="btn"
      className="w-full p-2 my-2 text-white bg-gray-800 rounded-xl hover:bg-opacity-90 transition-all cursor-pointer active:cursor-progress"
    />
  );
};

export default Button;
