import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import data from "../../data/shadeX/section7.json";

const { TableColumns, TableRows } = data;

export default function ShadeSection7() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">The Benefits</h2>
        <p>
          Our large-scale but localized franchise model means you get the most  benefits with the least headache at the lowest costs.
        </p>
      </div>

      <Table>
        {/* table header */}
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            {TableColumns.map((col, i) => (
              <TableHead key={i} className="text-center">
                {col.head}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        {/* table body */}
        <TableBody>
          {TableRows.map((row, i) => (
            <TableRow key={i}>
              <TableCell className="font-medium">
                {row.text}
              </TableCell>

              {[row.image1, row.image2, row.image3, row.image4].map((img, il) => (
                  <TableCell key={il} className="text-center">
                    <Image src={img} alt="icon" width={20}  height={20}  className="mx-auto" />
                  </TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}
