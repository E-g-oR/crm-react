import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./Table.scss"

export type ITableHead = string[]

export interface ITableRowItem {
  name: string,
  rate: number,
  margin: "MORE" | "LESS" | "SAME",
  date: string
}

export type ITableRow = ITableRowItem[];



const TableHeadCustom: React.FC<{ data: ITableHead }> = ({ data }) => {

  return (
    <TableHead>
      <TableRow>
        {data.length && data.map(title => (
          <TableCell key={title}><strong>{title}</strong></TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

const TableRowCustom: React.FC<{ data: any[] }> = ({ data }) => {
  const properties = [] as string[];
  const items = [] as any[];

  React.useEffect(() => {

    for (let property in data[0]) {
      properties.push(property)
    }

    for (let i = 0; i < data.length; i++) {
      items[i] = [];
      properties.forEach((prop: any) => {
        items[i].push(data[i][prop])
      })
    }
    console.log(items);
    items.forEach(row => {
      row.forEach((item: any) => {
        console.log(item);

      })
    })
    return
  }, [])

  return (
    <>
      {items.length && items.map(row => (
        <TableRow>
          {row.length && row.map((item: any) => (
            <TableCell>{item}</TableCell>
          ))}
        </TableRow>
      ))}

    </>
  )
}

interface ITable {
  tableHead: ITableHead,
  tableRows: ITableRow,
  TableRowsComponent: React.FC<{ data: ITableRow}>
}

const CustomTable: React.FC<ITable> = ({
  tableHead,
  tableRows,
  TableRowsComponent
}) => {

  return (
    <TableContainer className="table-container" component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHeadCustom data={tableHead} />
        <TableBody>
          <TableRowsComponent data={tableRows} />
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomTable;