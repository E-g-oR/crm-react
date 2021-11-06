import { SendRounded } from "@mui/icons-material";
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const NewRecord = () => {
	const [type, setType] = React.useState('');

	const handleChange = (event) => {
		setType(event.target.value);
	};
	return (
		<>
			<Typography component="h1" variant="h4">Новая запись</Typography>
			<br />

			<Box sx={{ maxWidth: "500px" }}>
				<Paper sx={{ padding: "1rem 2rem" }} >
					<FormControl variant="filled" fullWidth margin="dense" >
						<InputLabel id="demo-simple-select-label">Категория</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={type}
							label="Категория"
							onChange={handleChange}
						>
							<MenuItem value="income" >Доход</MenuItem>
							<MenuItem value="expencies">Расход</MenuItem>
						</Select>
					</FormControl>

					<TextField
						fullWidth
						margin="dense"
						id="amount"
						label="Сумма"
						type="number"
						variant="filled"
					/>
					<TextField
						fullWidth
						margin="dense"
						id="description"
						label="Описание"
						type="text"
						variant="filled"
					/>
					<Button variant="contained" endIcon={<SendRounded />} >Send</Button>
				</Paper>
			</Box>


		</>
	)
}
export default NewRecord