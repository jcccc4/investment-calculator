import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";
const data = [
  {
    deposit: 32000,
    interest: 1526.53,
    endingBalance: 33526.53,
  },
  {
    deposit: 12000.0,
    interest: 2338.12,
    endingBalance: 47864.65,
  },
  {
    deposit: 12000.0,
    interest: 3198.41,
    endingBalance: 63063.06,
  },
];
export default function CardTable() {
  return (
    <Tabs defaultValue="yearly" className="w-full ">
      <TabsList className=" grid grid-cols-2">
        <TabsTrigger value="yearly">YEARLY</TabsTrigger>
        <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
      </TabsList>
      <TabsContent value="yearly">
        <Table className="pt-40 ">
          <TableHeader className="bg-muted pt-40">
            <TableRow className="bg-muted relative">
              <TableHead className="text-center w-[60px] h-10">Year</TableHead>
              <TableHead className="text-right min-w-40">Ending Balance</TableHead>
              <TableHead className="text-right min-w-40">Deposit</TableHead>
              <TableHead className="text-right min-w-40">Interest</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data, index) => (
              <TableRow key={`tabledata-${index + 1}`} >
                <TableCell className="text-center font-medium " >
                  {index + 1}
                </TableCell>
                <TableCell className="text-right">{data.interest}</TableCell>
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
        <h1>hi</h1>
      </TabsContent>
    </Tabs>
  );
}
