"use client";

import {
  ColumnDef,
  Table as ReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Data } from "@/app/page";

interface DataTableProps {
  table: ReactTable<Data>;
}

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
export function DataTable({ table }: DataTableProps) {
  return (
    <Table className="pt-40 ">
      <TableHeader className="bg-muted pt-40">
        <TableRow className="bg-muted relative">
          <TableHead className="text-center w-[60px] h-10">Year</TableHead>
          <TableHead className="text-right min-w-40">Deposit</TableHead>
          <TableHead className="text-right min-w-40">Interest</TableHead>
          <TableHead className="text-right min-w-40">Ending Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell className="text-center font-medium ">
              {row.original.year}
            </TableCell>
            <TableCell className="text-right">{row.original.deposit}</TableCell>
            <TableCell className="text-right">
              {row.original.interest}
            </TableCell>
            <TableCell className="text-right">
              {row.original.endingBalance}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
     
    </Table>
  );
}
