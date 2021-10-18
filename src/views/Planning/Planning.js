import { LinearProgress, Typography } from "@mui/material";
import React from "react";

const Planning = () => {
	return (
		<>
			<Typography variant='h4'>Планирование</Typography>
			<br />
			<Typography variant='h5'>15 238.23 p.</Typography>
			<br />
			<Typography variant='body1'>Девушка: 15 238.23 р. из 40 000 р.</Typography>
			<br />
			<LinearProgress variant="determinate" color="success" value={37} />
		</>
	)
}
export default Planning