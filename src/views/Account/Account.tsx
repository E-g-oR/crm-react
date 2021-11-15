import React from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomTable, { ITableHead, ITableRow } from "../components/UI/Table";
import './account.css'

const tableHead: ITableHead = ['Валюта', 'Курс', 'Дата'];
const tableRows: ITableRow = [
	{ name: 'USD', rate: 2.4428, margin: "MORE", date: '12.12.2021' },
	{ name: 'EUR', rate: 2.8012, margin: "LESS", date: '12.12.2021' },
	{ name: 'RUB', rate: 3.4332, margin: "LESS", date: '12.12.2021' },
	{ name: 'GBP', rate: 3.2718, margin: "LESS", date: '12.12.2021' },
];

const TableRowsComponent: React.FC<{ data: ITableRow }> = ({ data}) => {
	return (
		<>
		</>
	)
}


const Account = () => {
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
						<Paper>
							<CustomTable TableRowsComponent={TableRowsComponent} tableRows={tableRows} tableHead={tableHead} />
						</Paper>
					</Box>
				</Paper>

			</Stack>
		</>
	)
}
export default Account