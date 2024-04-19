import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import ReqLabel from "./ReqLabel";

export default function Create() {
  const [state, setState] = useState({ fname: "", lname: "", email: "", password: "" });
  const [valid, setValid] = useState({ fname: false, lname: false, email: false, password: false });
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  function inputOnChange(e) {
    let data = e.target.value;
    let name = e.target.name;

    setState({ ...state, [name]: data });

    if (data.length == 1 && valid[name] === false) {
      setValid({ ...valid, [name]: !valid[name] });
    } else if (data.length == 0 && valid[name] === true) {
      setValid({ ...valid, [name]: !valid[name] });
    }
  }

  function labelValid(name, statement) {
    return valid[name] ? <ReqLabel statement={statement} /> : "";
  }

  return (
    <>
      <h1 className="text-3xl text-center">Create For Free</h1>
      <form action="" className="mt-10 " onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between">
          <Input size={"w-[14rem]"} labelValid={labelValid} inputOnChange={inputOnChange} name={"fname"} statement={"First Name"} type={"text"} />
          <Input size={"w-[14rem]"} labelValid={labelValid} inputOnChange={inputOnChange} name={"lname"} statement={"Last Name"} type={"text"} />
        </div>
        <Input size={"w-full"} labelValid={labelValid} inputOnChange={inputOnChange} name={"email"} statement={"Email"} type={"email"} />
        <Input size={"w-full"} labelValid={labelValid} inputOnChange={inputOnChange} name={"password"} statement={"Set Up Your Password"} type={"password"} />
        <button type="submit" className="bg-[#1ab188] w-[30rem] h-[4rem] text-2xl grow text-center content-center hover:bg-[#179F7A] duration-500 font-semibold">
          CREATE
        </button>
      </form>
    </>
  );
}
