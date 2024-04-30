import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Table({ list, setList }) {
  console.log(list);

  return (
    <>
      <h1 className="text-3xl text-center mb-5">Welcome back!</h1>
      <section className="h-[22rem] overflow-auto scrollbar ">
        {list.map(({ id, fname, lname }) => (
          <Card key={id} id={id} fname={fname} lname={lname} list={list} setList={setList} />
        ))}
      </section>
    </>
  );
}
