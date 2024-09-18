"use client";
import React from "react";
import { useForm } from "react-hook-form";

interface InputDataProps {
  username: string;
  email: string;
  channel: string;
}

let renderCount = 0;
const YoutbeForm = () => {
  const form = useForm<InputDataProps>({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      return {
        username: "sharique",
        email: data?.email,
        channel: "shariqueST",
      };
    },
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  renderCount++;
  const onSubmit = (data: InputDataProps) => {
    console.log(data);
  };

  return (
    <>
      <h1 className="text-2xl ">
        {"Render Count is: "} {renderCount}
      </h1>
      <div className="flex justify-center h-svh items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full">
          <div className=" flex flex-col mt-5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="border rounded-md p-1 mt-1"
              {...register("username", {
                required: {
                  value: true,
                  message: "username is required",
                },
                minLength: {
                  value: 3,
                  message: "username should be atleast 3 character",
                },
              })}
            />
            <div className="text-red-600">{errors?.username?.message}</div>
          </div>

          <div className=" flex flex-col mt-5">
            <label htmlFor="password">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="border rounded-md p-1 mt-1"
              {...register("email", {
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                  message: "It is not valide email",
                },
                validate: {
                  isblackList: (fieldValue) => {
                    return fieldValue === "sharique269@gmail.com"
                      ? "This email is blacklisted"
                      : true;
                  },
                },
              })}
            />
            <div className="text-red-600">{errors?.email?.message} </div>
          </div>

          <div className=" flex flex-col mt-5">
            <label htmlFor="channel">Channel</label>
            <input
              type="text"
              id="channel"
              placeholder="channel name"
              className="border rounded-md p-1 mt-1"
              {...register("channel")}
            />
          </div>

          <button className="mt-8 border rounded-md px-2 py-1">Submit</button>
        </form>
      </div>
    </>
  );
};

export default YoutbeForm;
