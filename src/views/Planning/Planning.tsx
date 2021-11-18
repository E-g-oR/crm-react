import { LinearProgress, Typography } from "@mui/material";
import React from "react";
import PlanningItem from "./PlanningItem";

const Planning = () => {
	const VALUES = [
		{
			title: "Девушка",
			value: 13970,
			limit: 45000
		},
		{
			title: "Еда",
			value: 750,
			limit: 10000
		},
		{
			title: "Машина",
			value: 57980,
			limit: 60000
		},
		{
			title: "Подарки",
			value: 50980,
			limit: 60000
		}
	]

	return (
		<>
			<Typography component="h1" variant="h4">Планирование</Typography>
			<br />
			{VALUES.length && VALUES.map(item => (
				<PlanningItem key={item.title + item.value} value={item.value} limit={item.limit} title={item.title} />
			))}
		</>
	)
}
export default Planning