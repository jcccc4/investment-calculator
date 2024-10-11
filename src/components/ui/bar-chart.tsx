"use client";

import { Bar, BarChart, XAxis } from "recharts";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Data } from "@/lib/types";


const chartConfig = {
  startingAmount: {
    label: "Starting Amount",
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

export function Component({
  dataArr,
  startingAmount,
}: {
  dataArr: Data[];
  startingAmount: number;
}) {
  const barGraphData = dataArr.map((data, index) => {
    const contribution =
      index === 0 ? data.deposit - startingAmount : data.deposit * (index + 1);

    const interest =
      data.interest +
      dataArr.slice(0, index).reduce((acc, curr) => acc + curr.interest, 0);

    return {
      year: `Year ${data.year}`,
      startingAmount,
      contribution,
      interest,
    };
  });

  return (
    <Card className="w-full">
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="w-full max-h-[540px] min-h-[300px]"
        >
          <BarChart accessibilityLayer data={barGraphData}>
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
            <Bar
              dataKey="startingAmount"
              stackId="a"
              fill="var(--color-startingAmount)"
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="contribution"
              stackId="a"
              fill="var(--color-contribution)"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="interest"
              stackId="a"
              fill="var(--color-interest)"
              radius={[4, 4, 0, 0]}
            />

            <ChartLegend content={<ChartLegendContent />} />
          </BarChart>
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
