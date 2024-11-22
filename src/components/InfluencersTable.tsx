"use client";

import {
  CellContext,
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Influencer = {
  sNo: number;
  instaHandlers: string;
  followings: number;
  profileLinks: string;
  staticPostFee: number;
  videoPostFee: number;
  city: string;
  er: number; // Engagement Rate (ER) as a percentage (e.g., 5.2 for 5.2%)
  niche: string;
  contact: string;
  comments: string;
};

export const columns: ColumnDef<Influencer>[] = [
  {
    accessorKey: "sNo",
    header: "S.No",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div>{row.getValue("sNo")}</div>
    ),
  },
  {
    accessorKey: "instaHandlers",
    header: "Insta Handlers",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div>{row.getValue("instaHandlers")}</div>
    ),
  },
  {
    accessorKey: "followings",
    header: "Followings",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div>{row.getValue<string>("followings")}</div> // Formats with commas
    ),
  },
  {
    accessorKey: "profileLinks",
    header: "Profile Links",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <a
        href={row.getValue("profileLinks")}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View Profile
      </a>
    ),
  },
  {
    accessorKey: "staticPostFee",
    header: "Static Post Fee",
    cell: ({ row }: CellContext<Influencer, unknown>) => {
      return (
        <div className="text-right font-medium">
          {row.getValue<number>("staticPostFee")}
        </div>
      );
    },
  },
  {
    accessorKey: "videoPostFee",
    header: "Video Post Fee",
    cell: ({ row }: CellContext<Influencer, unknown>) => {
      return (
        <div className="text-right font-medium">
          {row.getValue<number>("videoPostFee")}
        </div>
      );
    },
  },
  {
    accessorKey: "city",
    header: "City",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div className="capitalize">{row.getValue("city")}</div>
    ),
  },
  {
    accessorKey: "er",
    header: "ER",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div>{row.getValue<number>("er").toFixed(2)}%</div> // Formats to 2 decimal places
    ),
  },
  {
    accessorKey: "niche",
    header: "Niche",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div className="capitalize">{row.getValue("niche")}</div>
    ),
  },
  {
    accessorKey: "contact",
    header: "Contact",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div>{row.getValue("contact")}</div>
    ),
  },
  {
    accessorKey: "comments",
    header: "Comments",
    cell: ({ row }: CellContext<Influencer, unknown>) => (
      <div>{row.getValue<string>("comments")}</div> // Formats with commas
    ),
  },
];

function InfluencersTable() {
  const table = useReactTable({
    data: [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: { pageIndex: 0, pageSize: 10 },
    },
  });

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="space-x-2">
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
export default InfluencersTable;
