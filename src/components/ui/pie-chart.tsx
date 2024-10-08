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
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Data, PieData } from "@/app/page";
import { formatCurrency } from "@/lib/formatters";

export const description = "A donut chart";

const chartConfig = {
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },

  test: {
    label: "test",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;

type Props = {
  pieGraphData: PieData;
};
export function Component({ pieGraphData }: Props) {
  const chartData = [
    {
      browser: "Ending Balance",
      visitors: pieGraphData.endingBalance,
      fill: "var(--color-chrome)",
    },
    {
      browser: "Starting Amount",
      visitors: pieGraphData.startingAmount,
      fill: "var(--color-safari)",
    },
    {
      browser: "Total Contribution",
      visitors: pieGraphData.totalContributions,
      fill: "var(--color-firefox)",
    },
    {
      browser: "Total Interest",
      visitors: pieGraphData.totalInterest,
      fill: "black",
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
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
