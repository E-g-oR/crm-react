import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./Table.scss"
import { Typography } from '@mui/material';

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
          <TableCell key={title}> <Typography><strong>{title}</strong></Typography> </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

interface ITable {
  tableHead: ITableHead,
  tableRows: any[] | null,
  TableRowsComponent: React.FC<{ data: any[] | null}>
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
          <TableRowsComponent data={tableRows} />
      </Table>
    </TableContainer>
  );
}
export default CustomTable;