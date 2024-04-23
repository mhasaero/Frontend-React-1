import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Table() {
  return (
    <>
      <h1 className="text-3xl text-center mb-5">Welcome back!</h1>
      <section className="h-[16rem] overflow-auto scrollbar">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </>
  );
}
