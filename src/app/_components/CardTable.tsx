import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { Dispatch, SetStateAction } from "react";
import { Data, Inputs } from "../page";
import { investmentCalculator } from "./form/investmentCalculator";

export default function CardTable({
  data,
  setData,
  formResult,
}: {
  data: Data[];
  formResult: Inputs;
  setData: Dispatch<SetStateAction<Data[]>>;
}) {
  console.log(formResult);

  return (
    <Tabs
      defaultValue="yearly"
      className="w-full "
      onValueChange={(value) =>
        setData(investmentCalculator(formResult, value))
      }
    >
      <TabsList className=" grid grid-cols-2">
        <TabsTrigger value="yearly">YEARLY</TabsTrigger>
        <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
      </TabsList>
      <TabsContent value="yearly">
        <Table className="pt-40 ">
          <TableHeader className="bg-muted pt-40">
            <TableRow className="bg-muted relative">
              <TableHead className="text-center w-[60px] h-10">Year</TableHead>
              <TableHead className="text-right min-w-40">Deposit</TableHead>
              <TableHead className="text-right min-w-40">Interest</TableHead>
              <TableHead className="text-right min-w-40">
                Ending Balance
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 &&
              data.map((data, index) => (
                <TableRow key={`tabledata-${index + 1}`}>
                  <TableCell className="text-center font-medium ">
                    {data.year}
                  </TableCell>
                  <TableCell className="text-right">{data.deposit}</TableCell>
                  <TableCell className="text-right">{data.interest}</TableCell>
                  <TableCell className="text-right">
                    {data.endingBalance}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="monthly">
        <Table className="pt-40 ">
          <TableHeader className="bg-muted pt-40">
            <TableRow className="bg-muted relative">
              <TableHead className="text-center w-[60px] h-10">Year</TableHead>
              <TableHead className="text-right min-w-40">Deposit</TableHead>
              <TableHead className="text-right min-w-40">Interest</TableHead>
              <TableHead className="text-right min-w-40">
                Ending Balance
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length > 0 &&
              data.map((data, index) => (
                <TableRow key={`tabledata-${index + 1}`}>
                  <TableCell className="text-center font-medium ">
                    {data.year}
                  </TableCell>
                  <TableCell className="text-right">{data.deposit}</TableCell>
                  <TableCell className="text-right">{data.interest}</TableCell>
                  <TableCell className="text-right">
                    {data.endingBalance}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TabsContent>
    </Tabs>
  );
}
