export default function Update() {
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
  </>;
}
