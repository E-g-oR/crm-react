import React, { ReactElement } from "react";
import { Button, Chip, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ITableHead, ITableRow } from "../components/UI/Table";

interface ITableHistoryRowItem {
	id: number,
	amount: number,
	currency: string,
	date: string,
	category: string,
	type: ReactElement,
	action: ReactElement
}
const tableHead: ITableHead = ['Валюта', 'Курс', 'Дата'];
const tableRows: ITableHistoryRowItem[] = [
	{
		id: 1,
		currency: 'USD',
		amount: 2.4428,
		category: "MORE",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		action: <Button>Открыть</Button>
	},
	{
		id: 2,
		currency: 'USD',
		amount: 3.4332,
		category: "LESS",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		action: <Button>Открыть</Button>
	},
	{
		id: 3,
		currency: 'RUB',
		amount: 2.8012,
		category: "LESS",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		action: <Button>Открыть</Button>
	},
	{
		id: 4,
		currency: 'EUR',
		amount: 3.2718,
		category: "LESS",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		action: <Button>Открыть</Button>
	},
];

const History = () => {
	return (
		<>
			<Typography component="h1" variant="h4">История</Typography>
			<br />

			<Box>
				<Paper variant="outlined">
					<table>
						<thead>
							<tr>
								<th >#</th>
								<th>Сумма</th>
								<th>Дата</th>
								<th>Категория</th>
								<th>Тип</th>
								<th>Открыть</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>9 990 р.</td>
								<td>25.12.2021</td>
								<td>для работы</td>
								<td>
									<Chip label="расход" color="error" />
								</td>
								<td>
									<Button variant="outlined" >Открыть</Button>
								</td>
							</tr>
							<tr>
								<td>2</td>
								<td>1 700 бел. р.</td>
								<td>07.02.2022</td>
								<td>для работы</td>
								<td>
									<Chip label="расход" color="error" />
								</td>
								<td>
									<Button variant="outlined" >Открыть</Button>
								</td>
							</tr>
							<tr>
								<td>3</td>
								<td>1 500 р.</td>
								<td>07.12.2021</td>
								<td>для работы</td>
								<td>
									<Chip label="доход" color="success" />
								</td>
								<td>
									<Button variant="outlined" >Открыть</Button>
								</td>
							</tr>
						</tbody>

					</table>
				</Paper>
			</Box>
		</>
	)
}
export default History;