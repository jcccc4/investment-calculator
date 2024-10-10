"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PieData } from "@/app/page";
import { formatCurrency } from "@/lib/formatters";

export const description = "A donut chart";

const chartConfig = {
  amount: {
    label: "Amount",
    color: "hsl(var(--chart-1))",
  },
  contribution: {
    label: "Contribution",
    color: "hsl(var(--chart-2))",
  },
  interest: {
    label: "Interest",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

type Props = {
  pieGraphData: PieData;
};
export function Component({ pieGraphData }: Props) {
  const chartData = [
    {
      browser: "Starting Amount",
      visitors: pieGraphData.startingAmount,
      fill: "var(--color-amount)",
    },
    {
      browser: "Total Contribution",
      visitors: pieGraphData.totalContributions,
      fill: "var(--color-contribution)",
    },
    {
      browser: "Total Interest",
      visitors: pieGraphData.totalInterest,
      fill: "var(--color-interest)",
    },
  ];
  return (
    <Card className="flex flex-col">
      <CardHeader className="">
        <CardTitle>Results</CardTitle>
      </CardHeader>
      <CardContent className="[&>*]:flex [&>*]:justify-between">
        <div className="font-semibold">
          <dt>End Balance</dt>
          <dd>{formatCurrency(pieGraphData.endingBalance)}</dd>
        </div>
        <div>
          <dt>Starting Amount</dt>
          <dd>{formatCurrency(pieGraphData.startingAmount)}</dd>
        </div>
        <div>
          <dt>Total Contribution</dt>
          <dd>{formatCurrency(pieGraphData.totalContributions)}</dd>
        </div>
        <div>
          <dt>Total Interest</dt>
          <dd>{formatCurrency(pieGraphData.totalInterest)}</dd>
        </div>
      </CardContent>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
            />
            {/* <ChartLegend content={<ChartLegendContent />} /> */}
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 items-start">
        <h2 className="font-semibold">Legends</h2>
        <div className="">
          <div className="flex gap-4">
            <div className="w-4 h-4 rounded-full bg-[hsl(var(--chart-1))]"></div>
            <div>Starting Amount</div>
          </div>
          <div className="flex gap-4">
            <div className="w-4 h-4 rounded-full bg-[hsl(var(--chart-2))]"></div>
            <div>Total Contribution</div>
          </div>
          <div className="flex gap-4">
            <div className="w-4 h-4 rounded-full bg-[hsl(var(--chart-3))]"></div>
            <div>Total Interest</div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
