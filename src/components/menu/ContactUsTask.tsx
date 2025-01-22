"use client";
import { Eye, EyeOff, X } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const [showPassword, setShowPassword] = useState(false);

  // React Hook Form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form Data Submitted:", data);
    resetField;

    // Handle the form data (e.g., send to server)
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="max-sm:mx-3 bg-black/70 h-full">
      <div className="max-w-[900px]  max-sm:h-auto w-full flex max-sm:flex-col-reverse justify-between mx-auto rounded-[2rem] bg-gradient-to-br from-[#e3e5e6] via-[#f6e4b6] to-[#fce8b1]">
        <div className="w-[45%] max-sm:w-full p-7">
          <div className="flex max-sm:justify-center">
            <h1 className="px-3 py-1 border border-gray-400 text-gray-700 w-fit rounded-full max-sm:text-2xl">
              Crextio
            </h1>
          </div>
          <div className="mt-5 px-8 max-sm:px-0">
            <div className="text-center">
              <h2 className="text-2xl mb-1">Create an account</h2>
              <p className="text-sm text-gray-800">
                Sign up and get 30 day free trail
              </p>
            </div>
            <div className="mt-5 h-[410px] max-sm:h-auto">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                  <label
                    htmlFor="fullName"
                    className="ml-5 mb-1.5 text-sm text-gray-500"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="focus:outline-none p-2.5 rounded-full placeholder:text-sm"
                    placeholder="Enter your name"
                    {...register("fullName", {
                      required: "Full name is required",
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 characters allowed",
                      },
                    })}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm ml-5">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col mt-3">
                  <label
                    htmlFor="email"
                    className="ml-5 mb-1.5 text-sm text-gray-500"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="focus:outline-none p-2.5 rounded-full placeholder:text-sm"
                    placeholder="Enter your email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm ml-5">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="flex flex-col mt-3 relative">
                  <label
                    htmlFor="password"
                    className="ml-5 mb-1.5 text-sm text-gray-500"
                    
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="Enter your password"
                      className="focus:outline-none p-2.5 rounded-full w-full pr-10 placeholder:text-sm"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Minimum 6 characters required",
                        },
                      })}
                    />
                    <button
                      type="button"
                      className="absolute top-3 right-2"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye  size={20}/>}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm ml-5">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                <button className="w-full bg-[#ffd85f] p-3.5 rounded-full mt-6 text-sm">
                  Submit
                </button>
              </form>

              <div className="flex justify-between gap-2 lg:mt-3 mt-5">
                <div className="flex items-center justify-center gap-3 py-2.5 border border-gray-500 w-full rounded-full">
                  <img src="apple-logo.png" alt="" className="size-5" />
                  <button>Apple</button>
                </div>
                <div className="flex items-center justify-center gap-3 py-2.5 border border-gray-500 w-full rounded-full">
                  <img src="google.png" alt="" className="size-5" />
                  <button>Google</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-8">
            <p className="text-gray-500 text-sm">
              Have an account?{" "}
              <span className="text-gray-800 underline">Sign in</span>
            </p>
            <p className="text-gray-800 text-sm underline">
              Terms & Conditions
            </p>
          </div>
        </div>

        <div className="w-[55%] max-sm:w-full p-3 overflow-hidden relative">
          <div className="!overflow-hidden">
            <img
              src="/consul.jpg"
              alt=""
              className="w-full h-[625px] max-sm:h-auto object-cover rounded-[2rem]"
            />
          </div>
          <div className="absolute top-8 right-8 rounded-full bg-white/80 p-1.5">
            <X size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
