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

				</Paper>
			</Box>
		</>
	)
}
export default History;