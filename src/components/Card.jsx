import { useState } from "react";

export default function Card({ id, fname, lname, list, setList }) {
  const [update, setUpdate] = useState(true);
  const [state, setState] = useState({ fname: fname, lname: lname });

  function delList() {
    const filtered = list.filter((props) => {
      return props.fname != fname && props.lname != lname;
    });
    setList(filtered);
  }

  function stateChange(e) {
    let data = e.target.value;
    let name = e.target.name;

    setState({ ...state, [name]: data });
  }

  function onUpdate() {
    setUpdate(!update);

    if (!update) {
      list.map((props) => {
        if (props.id == id) {
          props.fname = state.fname;
          props.lname = state.lname;
        }
      });
      console.log(list);
    } else console.log("false");
  }

  return (
    <div className="border-2 border-black m-2 h-16 rounded-lg bg-[#1ab188] px-2 flex justify-between items-center text-lg">
      <img src="/img/deidey.png" alt="deidey" className="size-12" />
      <input type="text" value={state.fname} name={"fname"} className="bg-transparent placeholder-white focus:outline-none px-3 border-2 border-[#13232f] w-[7rem] rounded-md " disabled={update} onChange={stateChange} />
      <input type="text" value={state.lname} name={"lname"} className="bg-transparent placeholder-white focus:outline-none px-3 border-2 border-[#13232f] w-[7rem] rounded-md" disabled={update} onChange={stateChange} />
      <button className="mx-3 hover:text-2xl duration-300 hover:text-blue-500" onClick={onUpdate}>
        {update ? <i className="bi bi-gear-fill"></i> : <i className="bi bi-send-fill"></i>}
      </button>
      <button className="mx-3 hover:text-2xl duration-300 hover:text-red-500" onClick={() => delList()}>
        <i className="bi bi-trash3-fill"></i>
      </button>
    </div>
  );
}
