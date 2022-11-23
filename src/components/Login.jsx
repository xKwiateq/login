import React from "react";

import { MdNoteAlt } from "react-icons/md";

import Email from "./Email";
import Password from "./Password";
import Remember from "./Remember";
import Button from "./Button";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gradient-to-br from-indigo-700 to-purple-500">
      <div className="bg-opacity-60 bg-white max-w-xs rounded-lg sm:max-w-md">
        {/* login input */}
        <div className="flex flex-col items-center justify-center px-14 py-8 sm:py-14">
          {/* icon */}
          <MdNoteAlt className=" text-5xl mb-6 sm:mb-14 text-gray-800" />

          {/* title and subtitle */}
          <h1 className="text-3xl font-bold text-gray-800 mb-3">Login</h1>
          <p className="text-gray-600 text-center mb-6 sm:mb-14 sm:w-2/3 w-full">
            Please, login to your account to use our services.
          </p>

          {/* form */}
          <form
            className="flex flex-col items-center justify-center w-full"
            onSubmit={takedata}
          >
            {/* email div */}

            <Email />

            {/* password div */}

            <Password />

            {/* remember me checkbox */}

            <Remember />

            {/* button */}

            <Button />

            {/* create account link */}
            <div className="flex items-center justify-center mt-2 flex-col sm:flex-row">
              <p className="text-gray-500">Don't have an account?</p>
              <a href="/" className=" text-blue-600 ml-2">
                Create one!
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

function takedata(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("passwd").value;

  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  console.log("Email: " + email + "\nPassword: " + password);
}

export default Login;
