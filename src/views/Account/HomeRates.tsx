import React, { useState } from 'react';
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Chip, Divider, FormControl, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Stack, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react';
import { Store } from '../../utils/store';
import LoadingCircul from '../components/UI/LoadingCircul/LoadingCircul';
import CustomTable, { ITableHead, ITableRow } from '../components/UI/Table';
import { IBase } from '../../utils/store/authStore/authInfoStore';

const CURRENCIES = ["USD", "EUR", "BYN", "BTC", "RUB", "TRY", "GBP", "CHF"];

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

  const base = ratesStore.base
  const [currency, setCurrency] = useState("EUR");

  const handleChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value);
    ratesStore.changeBase(event.target.value as IBase)
  }

  return (
    <Paper variant="outlined" sx={{ flex: 4 }}>
      <Box sx={{
        padding: "1rem 2rem",
        display: "flex",
        flexDirection: "column",
      }}>
        <Typography variant='h5'>Курсы валют</Typography>
{/* 
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography>Относительно: </Typography>
          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="base">Основная валюта</InputLabel>
            <Select
              labelId="base"
              id="base-select"
              value={currency}
              label="Age"
              onChange={handleChange}
            >
              {CURRENCIES.map(currencyName => <MenuItem value={currencyName}>{currencyName}</MenuItem>)}
            </Select>
          </FormControl>
        </Stack> */}

        <Paper variant="outlined" >
          <CustomTable TableRowsComponent={TableRowsComponent} tableRows={TableRowsData} tableHead={tableHead} />
        </Paper>
      </Box>
    </Paper>
  )
})

export default HomeRates
