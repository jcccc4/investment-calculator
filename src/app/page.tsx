"use client";
import Image from "next/image";
import InputDetails from "./_components/InputDetails";
import CardTable from "./_components/CardTable";
import { useState } from "react";
import { investmentCalculator } from "../lib/investmentCalculator";
import { Component as PieChart } from "@/components/ui/pie-chart";
import { Component as BarChart } from "@/components/ui/bar-chart";
import { Data, Inputs, initialData } from "@/lib/types";



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
    <div className="bg-muted max-w-[1280px] mx-4 lg:px-10 lg:mx-auto">
      <header className="flex my-4 items-center gap-2  ">
        <Image src={"/logo.png"} alt={"logo"} width="40" height="40" />
        <h1 className="text-2xl gap-2">Investment Calculator</h1>
      </header>
      <main className="[&>section>*]:child-card flex flex-col gap-4">
        <section className="lg:flex lg:gap-4">
          <InputDetails setFormResult={setFormResult} />
          <CardTable data={dataArr} setTab={setTab} />
        </section>
        <section className="lg:flex lg:gap-4 mb-10">
          <PieChart
            pieGraphData={pieChartCalculator(
              dataArr,
              formResult.startingAmount
            )}
          />
          <BarChart
            dataArr={dataArr}
            startingAmount={formResult.startingAmount}
          />
        </section>
      </main>
    </div>
  );
}
