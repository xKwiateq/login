import React from "react";

const Remember = () => {
  return (
    <div className="flex items-start justify-between w-full my-2 flex-col sm:flex-row sm:items-center mb-8">
      <div className="flex items-center justify-start">
        <input type="checkbox" className="mr-2 " />
        <p className="text-gray-500">Remember me</p>
      </div>
      <div className="flex items-center justify-start">
        <a href="/" className=" text-blue-600">
          I forgot my password!
        </a>
      </div>
    </div>
  );
};

export default Remember;
