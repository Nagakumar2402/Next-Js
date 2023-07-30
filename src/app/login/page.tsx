"use client";
import Link from "next/link";
import React from "react";
import { FaUserAlt, FaEnvelope, FaLock } from "react-icons/fa";
import { useForm } from "react-hook-form";
const LoginPage = () => {
  type Inputs = {
    username: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit = (data: Inputs) => {
    console.log(data);
    reset();
  };
  const inputBorderColor = (fieldName: keyof Inputs) => {
    return errors[fieldName]
      ? "border-red-500  focus:border-red-400  focus:ring-red-300  focus:ring-opacity-50"
      : "border-gray-400";
  };

  return (
    <div className="max-w-screen-xl px-4 py-4 mx-auto mt-20 bg-gradient-to-t from-orange-300 to-sky-300 md:py-16 md:px-8">
      <div className="max-w-lg p-8 mx-auto border shadow-lg rounded-xl bg-glassMorphism backdrop-blur border-glassMorphism1">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-2xl font-bold md:text-3xl">
            Get Started today !
          </h1>
          <p className="mt-4 text-gray-500">
            sign up page is as simple as it gets.
            <br /> In signing up, the platform ?
          </p>
        </div>
        <form
          action=""
          className="flex flex-col max-w-md gap-3 mx-auto mt-8 space-y-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="email" className="sr-only">
              email
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full p-4 text-sm capitalize bg-transparent border-gray-600 rounded-lg shadow-sm ${inputBorderColor(
                  "email"
                )}`}
                placeholder="Enter email"
                {...register("email", { required: true })}
              />
              <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                <FaEnvelope className="text-gray-400" />
              </span>
            </div>
            <div className="relative">
              {errors.password && (
                <span className="absolute inset-y-0 w-full py-1 mx-auto text-center text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              password
            </label>
            <div className="relative">
              <input
                type="text"
                className={`w-full p-4 text-sm capitalize bg-transparent border-gray-600 rounded-lg shadow-sm ${inputBorderColor(
                  "password"
                )}`}
                placeholder="Enter password"
                {...register("password", { required: true })}
              />
              <span className="absolute inset-y-0 grid px-4 end-0 place-content-center">
                <FaLock className="text-gray-400" />
              </span>
            </div>
            <div className="relative">
              {errors.password && (
                <span className="absolute inset-y-0 w-full py-1 mx-auto text-center text-red-500 ">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white transition-all duration-300 ease-in-out bg-indigo-600 rounded-lg hover:bg-indigo-700"
          >
            Sign In
          </button>

          <p className="text-sm text-center text-gray-500">
            No account?
            <Link className="px-2 underline" href="signup">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
