import React from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Chip, Divider, Paper, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import { Store } from '../../utils/store';
import LoadingCircul from '../components/UI/LoadingCircul/LoadingCircul';
import CustomTable, { ITableHead, ITableRow } from '../components/UI/Table';


const tableHead: ITableHead = ['Валюта', 'Курс', 'Дата'];

const TableRowsComponent: React.FC<{ data: ITableRow | null }> = ({ data }) => {
  return (
    <TableBody>
      {data ?
        data.map(item => (
          <TableRow key={item.name + item.rate}>
            <TableCell>{item.name}</TableCell>

            <TableCell>
              <Chip
                label={`${item.rate}`}
                color={item.margin === "MORE" ? "success" : "error"}
                variant="outlined"
                icon={item.margin === "MORE" ? <ArrowDropUp /> : <ArrowDropDown />}
              />
            </TableCell>

            <TableCell>{item.date}</TableCell>
          </TableRow>
        )) :
        <TableRow >
          <LoadingCircul />
        </TableRow>
      }
    </TableBody>
  )
}

const HomeRates: React.FC<{ store: Store }> = observer(({ store }) => {
  const ratesStore = store.ratesStore;
  const TableRowsData = ratesStore.rates;
  return (
    <Paper variant="outlined" sx={{ flex: 4 }}>
      <Box sx={{
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
      }}>
        <Typography variant='h5'>Курсы валют</Typography>
        <Paper variant="outlined" >
          <CustomTable TableRowsComponent={TableRowsComponent} tableRows={TableRowsData} tableHead={tableHead} />
        </Paper>
      </Box>
    </Paper>
  )
})

export default HomeRates
