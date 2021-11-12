import React from "react";
import { Divider, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CustomTable from "../components/UI/Table";
import './account.css'

const tableHead = ['Валюта', 'Курс', 'Дата'];
const tableRows = [
	{ name: 'USD', rate: 2.4428, margin: "MORE", date: '12.12.2021' },
	{ name: 'EUR', rate: 2.8012, margin: "LESS", date: '12.12.2021' },
	{ name: 'RUB', rate: 3.4332, margin: "LESS", date: '12.12.2021' },
	{ name: 'GBP', rate: 3.2718, margin: "LESS", date: '12.12.2021' },
];

const rows = [
	{ id: 1, col1: 'Hello', col2: 'World', col3: '12.12.2021' },
	{ id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: '12.12.2021' },
	{ id: 3, col1: 'MUI', col2: 'is Amazing', col3: '12.12.2021' },
];
const columns = [
	{ field: 'col1', headerName: 'Валюта', width: 150 },
	{ field: 'col2', headerName: 'Курс', width: 150 },
	{ field: 'col3', headerName: 'Дата', width: 150 },
];



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
						<Paper variant="outlined">
							<table>
								<thead>
									<tr>
										<th>Валюта</th>
										<th>Курс</th>
										<th>Дата</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>USD</td>
										<td>2.635</td>
										<td>17.10.2021</td>
									</tr>
									<tr>
										<td>EUR</td>
										<td>3.123</td>
										<td>17.10.2021</td>
									</tr>
									<tr>
										<td>GBP</td>
										<td>3.658</td>
										<td>17.10.2021</td>
									</tr>
								</tbody>

							</table>
						</Paper>
						<Divider />
						<Paper>
							<CustomTable tableHead={['hello']} tableRows={['goodbye']} />
						</Paper>
					</Box>
				</Paper>

			</Stack>
		</>
	)
}
export default Account