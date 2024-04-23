export default function Card() {
  return (
    <div className="border-2 border-black m-2 h-16 rounded-lg bg-[#1ab188] px-2 flex justify-between items-center text-lg">
      <img src="/img/deidey.png" alt="deidey" className="size-12" />
      <h4>First Name</h4>
      <h4>Last Name</h4>
      <button className="mx-3 hover:text-2xl duration-300">
        <i class="fi fi-rr-settings-sliders"></i>
      </button>
      <button className="mx-3 hover:text-2xl duration-300 ">
        <i class="fi fi-rs-trash"></i>
      </button>
    </div>
  );
}
