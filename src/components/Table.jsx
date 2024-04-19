import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Input from "./Input";

export default function Table() {
  return (
    <>
      <h1 className="text-3xl text-center">Welcome back!</h1>
      <form action="" className="mt-10 " onSubmit={handleSubmit(onSubmit)}>
        <Input size={"w-full"} labelValid={labelValid} inputOnChange={inputOnChange} name={"email"} statement={"Email"} type={"text"} />
        <Input size={"w-full"} labelValid={labelValid} inputOnChange={inputOnChange} name={"password"} statement={"Set Up Your Password"} type={"password"} />
        <p className="text-[#179F7A] mb-1 float-right">Forgot Password?</p>
        <button type="submit" className="bg-[#1ab188] w-full h-[4rem] text-2xl font bold">
          LOG IN
        </button>
      </form>
    </>
  );
}
