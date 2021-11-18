import React, { useEffect, useState } from "react";
import { observer } from "mobx-react"
import { Chip, CircularProgress, Divider, Paper, Stack, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomTable, { ITableHead, ITableRow } from "../components/UI/Table";
import './account.css'
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import { Store } from "../../utils/store";
import LoadingCircul from "../components/UI/LoadingCircul/LoadingCircul";

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


const Account: React.FC<{ store: Store }> = observer(({ store }) => {
	const ratesStore = store.ratesStore;
	const TableRowsData = ratesStore.rates;
	return (
		<>
			<Typography component="h1" variant="h4">Счет</Typography>
			<br />
			<Stack
				direction={{ xs: 'column', sm: 'column', md: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
			>
				<Paper
					variant="outlined"
					sx={{
						backgroundColor: "primary.main",
						flex: 2
					}}>
					<Box sx={{ // TODO change to className prop
						color: "#fff",
						padding: "1rem 2rem",
						display: "flex",
						flexDirection: "column",
					}}>
						<Typography component="h2" variant="h5">Счет</Typography>
						<Typography variant="h6">12 430.70 р.</Typography>
					</Box>
					<Box sx={{ // TODO change to className prop
						color: "#fff",
						padding: "1rem 2rem",
						display: "flex",
						flexDirection: "column",
					}}>
						<Typography component="h2" variant="h5">Сбережения</Typography>
						<Typography variant="h6">12 430.70 р.</Typography>
					</Box>
				</Paper>

				<Paper variant="outlined" sx={{ backgroundColor: "secondary.main", flex: 4 }}>
					<Box sx={{ // TODO change to className prop
						color: "#fff",
						padding: "1rem 2rem",
						display: "flex",
						flexDirection: "column",
					}}>
						<Typography variant='h5'>Курсы валют</Typography>
						<Divider />
						<Paper variant="outlined" >
							<CustomTable TableRowsComponent={TableRowsComponent} tableRows={TableRowsData} tableHead={tableHead} />
						</Paper>
					</Box>
				</Paper>

			</Stack>
		</>
	)
})
export default Account