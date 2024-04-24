import { useState } from "react";

export default function Card() {
  const [update, setUpdate] = useState(true);

  return (
    <div className="border-2 border-black m-2 h-16 rounded-lg bg-[#1ab188] px-2 flex justify-between items-center text-lg">
      <img src="/img/deidey.png" alt="deidey" className="size-12" />
      <input type="text" placeholder="First Name" className="bg-transparent placeholder-white focus:outline-none px-3 border-2 border-[#13232f] w-[7rem] rounded-md " disabled={update} />
      <input type="text" placeholder="Last Name" className="bg-transparent placeholder-white focus:outline-none px-3 border-2 border-[#13232f] w-[7rem] rounded-md" disabled={update} />
      <button className="mx-3 hover:text-2xl duration-300 hover:text-blue-500" onClick={() => setUpdate(!update)}>
        {update ? <i className="bi bi-gear-fill"></i> : <i className="bi bi-send-fill"></i>}
      </button>
      <button className="mx-3 hover:text-2xl duration-300 hover:text-red-500">
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
}
