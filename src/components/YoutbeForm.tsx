"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputDataProps {
  username: string;
  email: string;
  channel: string;
  dob: Date;
  socialMedia: {
    instagram: string;
    youtube: string;
  };
  arrPhNumber: {
    number: string;
  }[];
}

// let renderCount = 0;
const YoutbeForm = () => {
  const [phone, setPhone] = useState("");

  const form = useForm<InputDataProps>({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();
      return {
        username: "sharique",
        email: data?.email,
        channel: "shariqueST",
        dob: new Date(),
        socialMedia: {
          instagram: "Intagram.com",
          youtube: "youtube.com",
        },
        arrPhNumber: [
          {
            number: "",
          },
        ],
      };
    },
  });
  const {
    register,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
    control,
    trigger,
  } = form;
  const { errors } = formState;
  const { append, fields, remove } = useFieldArray({
    name: "arrPhNumber",
    control,
  });

  // renderCount++;
  const onSubmit = (data: InputDataProps) => {
    console.log(data);
  };

  const watchField = watch();

  return (
    <>
      {/* <h1 className="text-2xl ">
        {"Render Count is: "} {renderCount}
      </h1> */}
      {/* <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full">
          <h1 className="text-2xl">Personal Details:</h1>
          <div className=" flex flex-col mt-5">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="border rounded-md p-1 mt-1 shadow-sm"
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
              className="border rounded-md p-1 mt-1 shadow-sm"
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
              className="border rounded-md p-1 mt-1 shadow-sm"
              {...register("channel")}
            />
          </div>
          <div className=" flex flex-col mt-5">
            <label htmlFor="instagram">Instagram Link</label>
            <input
              type="text"
              id="instagram"
              placeholder="instagram link"
              className="border rounded-md p-1 mt-1 shadow-sm"
              {...register("socialMedia.instagram")}
            />
          </div>
          <div className=" flex flex-col mt-5">
            <label htmlFor="youtube">Youtube Link</label>
            <input
              type="text"
              id="youtube"
              placeholder="youtube link"
              className="border rounded-md p-1 mt-1 shadow-sm"
              {...register("socialMedia.youtube")}
            />
          </div>
          <div className=" flex flex-col mt-5">
            <label htmlFor="channel">Date of birth</label>
            <input
              type="date"
              id="dob"
              placeholder="date of birth"
              className="border rounded-md p-1 mt-1 shadow-sm"
              {...register("dob", {
                valueAsDate: true,
                required: {
                  value: true,
                  message: "DOB is required",
                },
              })}
            />
          </div>
          <div className="">
            <h1 className="text-2xl mt-5 mb-3">List of phone n umbers</h1>
            {fields.map((item, index) => {
              return (
                <div className="" key={item.id}>
                  <div className="flex gap-5 mb-3">
                    <PhoneInput
                      country={"in"}
                      value={getValues(`arrPhNumber.${index}.number`)}
                      onChange={async (value) => {
                        setValue(`arrPhNumber.${index}.number`, value);
                        await trigger(`arrPhNumber.${index}.number`);
                      }}
                      autoFormat
                      inputProps={{
                        name: `arrPhNumber.${index}.number`,
                        required: true,
                      }}
                    />
                    <input
                      type="hidden"
                      {...register(`arrPhNumber.${index}.number`, {
                        required: "Phone number is required",
                        validate: {
                          isValid: (value) =>
                            value.length >= 10 ||
                            "Phone number must be at least 10 digits",
                        },
                      })}
                    />
                    {index > 0 && (
                      <button
                        type="button"
                        className="border rounded-md p-1"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  {errors.arrPhNumber?.[index]?.number?.message && (
                    <div className="text-red-600">
                      {fields.length === 1
                        ? "field value is required"
                        : "field value is required or else remove it"}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="">
              <button
                className="mt-3 border rounded-md p-1"
                type="button"
                onClick={() =>
                  append({
                    number: "",
                  })
                }
              >
                Add phone number
              </button>
            </div>
          </div>

          <button className="mt-8 border rounded-md px-2 py-1 mr-3">
            Submit
          </button>
          <button
            onClick={() => {
              console.log(getValues("socialMedia.instagram"));
            }}
            type="button"
            className="mt-8 border rounded-md px-2 py-1"
          >
            Get Values
          </button>
        </form>
      </div> */}
    </>
  );
};

export default YoutbeForm;
