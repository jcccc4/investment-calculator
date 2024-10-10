"use client";
import Image from "next/image";
import InputDetails from "./_components/InputDetails";
import CardTable from "./_components/CardTable";
import { useState } from "react";
import { investmentCalculator } from "../lib/investmentCalculator";
import { Component as PieChart } from "@/components/ui/pie-chart";
import { Component as BarChart } from "@/components/ui/bar-chart";

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
  type: "End",
  each: "Month",
};

export type PieData = {
  endingBalance: number;
  startingAmount: number;
  totalContributions: number;
  totalInterest: number;
};
function pieChartCalculator(data: Data[], startingAmount: number) {
  const totalContributions =
    data.reduce((sum, obj) => {
      return sum + Number(obj.deposit);
    }, Number(0)) - startingAmount;

  const totalInterest = data.reduce((sum, obj) => {
    return sum + Number(obj.interest);
  }, Number(0));
  return {
    endingBalance: data[data.length - 1].endingBalance,
    startingAmount: startingAmount,
    totalContributions: totalContributions,
    totalInterest: totalInterest,
  };
}

export default function Home() {
  const [formResult, setFormResult] = useState<Inputs>(initialData);
  const [tab, setTab] = useState<string>("yearly");
  const dataArr: Data[] = investmentCalculator(formResult, tab);
  return (
    <div className="mx-4">
      <header className="flex mt-8 ">
        <Image src={"/logo.png"} alt={"logo"} width="40" height="40" />
        <h1 className="text-2xl gap-2">Investment Calculator</h1>
      </header>
      <main className="[&>*]:child-card ">
        <InputDetails setFormResult={setFormResult} tab={tab} />
        <CardTable data={dataArr} setTab={setTab} />
        <PieChart
          pieGraphData={pieChartCalculator(dataArr, formResult.startingAmount)}
        />
        <BarChart dataArr={dataArr} startingAmount={formResult.startingAmount}/>
      </main>
    </div>
  );
}
