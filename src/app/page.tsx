"use client";
import Image from "next/image";
import InputDetails from "./_components/InputDetails";
import CardTable from "./_components/CardTable";

export type Inputs = {
  startingAmount: number;
  after: number;
  returnRate: number;
  compound: string;
  addOn: number;
  type: string;
  each: string;
};

export default function Home() {
  return (
    <div className="mx-4">
      <header className="flex mt-8 ">
        <Image src={"/logo.png"} alt={"logo"} width="40" height="40" />
        <h1 className="text-2xl gap-2">Investment Calculator</h1>
      </header>
      <main >
        <InputDetails />
        <CardTable />
      </main>
    </div>
  );
}
