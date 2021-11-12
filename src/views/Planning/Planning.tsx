import { LinearProgress, Typography } from "@mui/material";
import React from "react";

const Planning = () => {
	return (
		<>
			<Typography component="h1" variant="h4">Планирование</Typography>
			<br />
			<Typography variant='h5'>Девушка</Typography>
			<br />
			<Typography variant='body1'>15 238.23 р. из 40 000 р.</Typography>
			<br />
			<LinearProgress variant="determinate" color="success" value={37} />
			<br />
			<Typography variant='h5'>Еда</Typography>
			<br />
			<Typography variant='body1'> 24 736.55 р. из 30 000 р.</Typography>
			<br />
			<LinearProgress variant="determinate" color="warning" value={74} />
			<br />
			<Typography variant='h5'>Одежда</Typography>
			<br />
			<Typography variant='body1'>35 398.00 р. из 36 000 р.</Typography>
			<br />
			<LinearProgress variant="determinate" color="error" value={99} />
		</>
	)
}
export default Planning