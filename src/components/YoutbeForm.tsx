"use client";
import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

interface InputDataProps {
  username: string;
  email: string;
  channel: string;
  social: {
    twitter: string;
    facebook: string;
  };
  phoneNumbers: string[];
  dynamicNumber: {
    number: string;
  }[];
}

// let renderCount = 0;
const YoutbeForm = () => {
  const form = useForm<InputDataProps>({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      return {
        username: "sharique",
        email: data?.email,
        channel: "shariqueST",
        social: {
          twitter: "",
          facebook: "",
        },
        phoneNumbers: ["", ""],
        dynamicNumber: [{ number: "" }],
      };
    },
  });

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;
  const { append, remove, fields } = useFieldArray({
    name: "dynamicNumber",
    control,
  });

  // renderCount++;
  const onSubmit = (data: InputDataProps) => {
    console.log(data);
  };

  return (
    <>
      {/* <h1 className="text-2xl">
        {"Render Count is: "} {renderCount}
      </h1> */}
      <div className="flex justify-center items-center my-20">
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
              {...register("channel", {
                required: {
                  value: true,
                  message: "channel is required",
                },
              })}
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="twitter">Twitter</label>
            <input
              type="text"
              id="twitter"
              placeholder="enter twitter link"
              className="border rounded-md p-1 mt-1"
              {...register("social.twitter")}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="facebook">Facebook</label>
            <input
              type="text"
              id="facebook"
              placeholder="enter facebook link"
              className="border rounded-md p-1 mt-1"
              {...register("social.facebook", {
                required: {
                  value: true,
                  message: "facebook link is required",
                },
              })}
            />
            <div className="text-red-600">
              {errors?.social?.facebook?.message}{" "}
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="primary-number">Primary phone number</label>
            <input
              type="text"
              id="primary-number"
              placeholder="enter phone number"
              className="border rounded-md p-1 mt-1"
              {...register("phoneNumbers.0")}
            />
          </div>
          <div className="flex flex-col mt-5">
            <label htmlFor="secondary-number">Secondary phone number</label>
            <input
              type="text"
              id="secondary-number"
              placeholder="enter twitter link"
              className="border rounded-md p-1 mt-1"
              {...register("phoneNumbers.1")}
            />
          </div>
          0
          {/* DYNAMIC FIELD ADDED */}
          <div className="flex flex-col mt-5">
            <label htmlFor="secondary-number">Add Phone Numbers</label>
            {fields?.map((field, index) => {
              return (
                <div className="flex gap-2 my-2" key={field.id}>
                  <input
                    type="text"
                    className="border rounded-md p-1 w-full "
                    {...register(`dynamicNumber.${index}.number` as const)}
                  />
                  {index > 0 && (
                    <button
                      className="border rounded-md p-1"
                      onClick={() => remove(index)}
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              className="border rounded-md p-1 mt- w-fit"
              onClick={() => {
                append({ number: "" });
              }}
            >
              Add more number
            </button>
          </div>
          <button className="mt-8 border rounded-md px-2 py-1">Submit</button>
        </form>
      </div>
    </>
  );
};

export default YoutbeForm;
