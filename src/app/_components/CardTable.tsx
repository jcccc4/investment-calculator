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
import { investmentCalculator } from "../../lib/investmentCalculator";

import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { DataTable } from "./form/DataTable";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "year",
    header: "Year",
  },
  {
    accessorKey: "deposit",
    header: "Deposit",
  },
  {
    accessorKey: "interest",
    header: "Interest",
  },
  {
    accessorKey: "endingBalance",
    header: "Ending Balance",
  },
];

export default function CardTable({
  data,
  setData,
  formResult,
  setTab,
}: {
  data: Data[];
  formResult: Inputs;
  setData: Dispatch<SetStateAction<Data[]>>;
  setTab: Dispatch<SetStateAction<string>>;
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageSize: 5,
        pageIndex: 0,
      },
    },
  });

  table.getColumn;
  return (
    <div>
      <Tabs
        defaultValue="yearly"
        className="w-full "
        onValueChange={(value) => {
          setTab(value);
          setData(investmentCalculator(formResult, value));
        }}
      >
        <TabsList className=" grid grid-cols-2">
          <TabsTrigger value="yearly">YEARLY</TabsTrigger>
          <TabsTrigger value="monthly">MONTHLY</TabsTrigger>
        </TabsList>
        <TabsContent value="yearly">
          <DataTable table={table} />
        </TabsContent>
        <TabsContent value="monthly">
          <DataTable table={table} />
        </TabsContent>
      </Tabs>
      <div className="flex items-center justify-between">
        <div>
          {`Showing: ${
            table.getState().pagination.pageIndex *
              table.getState().pagination.pageSize +
            1
          } - ${Math.min(
            (table.getState().pagination.pageIndex + 1) *
              table.getState().pagination.pageSize,
            table.getFilteredRowModel().rows.length
          )}
          of ${table.getFilteredRowModel().rows.length}`}
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
