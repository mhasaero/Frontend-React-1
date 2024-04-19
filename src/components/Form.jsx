import Create from "./Create";
import { useState } from "react";

export default function Form() {
  const [show, setShow] = useState(false);
  const active = "bg-[#1ab188] grow text-center content-center text-2xl hover:bg-[#179F7A] duration-500";
  const passive = "bg-[#62746F] grow text-center content-center text-2xl text-gray-400 hover:text-white hover:bg-[#179F7A] duration-500";

  console.log(show);

  function handleSignUpClick() {
    if (show) {
      setShow(!show);
    }
  }

  function handleLoginClick() {
    if (!show) {
      setShow(!show);
    }
  }

  return (
    <section className="bg-[#13232f] py-8 px-[5rem] w-lg h-[30rem] rounded mx-auto text-white mt-20">
      <div className="flex w-full h-16 mb-10">
        <button type="submit" className={!show ? active : passive} onClick={handleSignUpClick}>
          Sign Up
        </button>
        <button type="submit" className={show ? active : passive} onClick={handleLoginClick}>
          Login
        </button>
      </div>
      {!show ? <Create /> : <Table />}
    </section>
  );
}
