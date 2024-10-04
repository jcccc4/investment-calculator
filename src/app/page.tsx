"use client";
import Image from "next/image";
import InputDetails from "./_components/InputDetails";
import CardTable from "./_components/CardTable";
import { useState } from "react";
import { investmentCalculator } from "./_components/form/investmentCalculator";

export type Inputs = {
  startingAmount: number;
  after: number;
  returnRate: number;
  compound: string;
  addOn: number;
  type: string;
  each: string;
};

export type Data = {
  year: number;
  deposit: number;
  interest: number;
  endingBalance: number;
};

export const initialData: Inputs = {
  startingAmount: 20000,
  after: 10,
  returnRate: 6,
  compound: "Annually",
  addOn: 1000,
  type: "Amount",
  each: "",
};

export default function Home() {
  const [formResult, setFormResult] = useState<Inputs>(initialData);
  const [data, setData] = useState<Data[]>(
    investmentCalculator(initialData)
  );

  return (
    <div className="mx-4">
      <header className="flex mt-8 ">
        <Image src={"/logo.png"} alt={"logo"} width="40" height="40" />
        <h1 className="text-2xl gap-2">Investment Calculator</h1>
      </header>
      <main className="[&>*]:child-card ">
        <InputDetails setData={setData} setFormResult={setFormResult}/>
        <CardTable data={data} setData={setData} formResult={formResult} />
      </main>
    </div>
  );
}
