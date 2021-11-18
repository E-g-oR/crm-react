import React, { ReactElement } from "react";
import {  Chip, Paper, Typography, TableBody, TableRow, TableCell, Tooltip, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import CustomTable, { ITableHead } from "../components/UI/Table";
import { OpenInNewOutlined } from "@mui/icons-material";

interface ITableHistoryRowItem {
	id: number,
	amount: number,
	currency: string,
	isIncome: boolean,
	date: string,
	category: string,
	type: ReactElement,
	action: ReactElement
}
const tableHead: ITableHead = ['#', 'Сумма', 'Категория', 'Дата', 'Тип', 'Действия'];
const tableRows: ITableHistoryRowItem[] = [
	{
		id: 1,
		currency: 'RUB',
		amount: 19560,
		category: "MORE",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		isIncome: false,
		action:
			<Tooltip title="Открыть" >
				<IconButton color="primary">
					<OpenInNewOutlined />
				</IconButton>
			</Tooltip>
	},
	{
		id: 2,
		currency: 'USD',
		amount: 13,
		category: "LESS",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		isIncome: false,
		action:
			<Tooltip title="Открыть" >
				<IconButton color="primary">
					<OpenInNewOutlined />
				</IconButton>
			</Tooltip>
	},
	{
		id: 3,
		currency: 'USD',
		amount: 50,
		category: "LESS",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		isIncome: true,
		action:
			<Tooltip title="Открыть" >
				<IconButton color="primary">
					<OpenInNewOutlined />
				</IconButton>
			</Tooltip>
	},
	{
		id: 4,
		currency: 'EUR',
		amount: 230,
		category: "LESS",
		date: '12.12.2021',
		type: <Chip label="расход" color="error" />,
		isIncome: true,
		action:
			<Tooltip title="Открыть" >
				<IconButton color="primary">
					<OpenInNewOutlined />
				</IconButton>
			</Tooltip>
	},
];

const HistoryTableRows: React.FC<{ data: ITableHistoryRowItem[] | null }> = ({ data }) => {
	return (
		<>
			<TableBody>
				{data && data.map(item => (
					<TableRow key={item.id + item.currency + item.amount}>
						<TableCell>{item.id}</TableCell>
						<TableCell>{`${item.amount} ${item.currency}`}</TableCell>
						<TableCell>{item.category}</TableCell>
						<TableCell>{item.date}</TableCell>
						<TableCell>
							{item.isIncome ?
								<Chip variant="outlined" label="Прибыль" color="success" /> :
								<Chip variant="outlined" label="Расход" color="error" />
							}
						</TableCell>
						<TableCell>{item.action}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</>
	)
}


const History = () => {
	return (
		<>
			<Typography component="h1" variant="h4">История</Typography>
			<br />
			<Box>
				<Paper variant="outlined">
					<CustomTable TableRowsComponent={HistoryTableRows} tableHead={tableHead} tableRows={tableRows} />
				</Paper>
			</Box>
		</>
	)
}
export default History;