import { SendRounded } from "@mui/icons-material";
import {
	Button,
	Paper,
	Stack,
	TextField,
	Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import './categories.css'
const Categories = () => {
	return (
		<>
			<Typography component="h1" variant="h4">Категории</Typography>
			<br />
			<Stack
				direction={{ xs: 'column', sm: 'column', md: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
			>
				<Box sx={{ maxWidth: "500px" }}>
					<Paper variant="outlined" sx={{ padding: "1rem 2rem" }} >
						<Typography variant="h5">Создать</Typography>

						<TextField
							fullWidth
							margin="dense"
							id="name"
							label="Название"
							type="text"
							variant="filled"
						/>
						<TextField
							fullWidth
							margin="dense"
							id="limit"
							label="Лимит"
							type="number"
							variant="filled"
						/>
						<Button variant="contained" endIcon={<SendRounded />} >Send</Button>
					</Paper>
				</Box>

				<Box sx={{ maxWidth: "500px" }}>
					<Paper variant="outlined" sx={{ padding: "1rem 2rem" }} >
						<Typography variant="h5">Редактировать</Typography>

						<TextField
							fullWidth
							margin="dense"
							id="category"
							label="Категория"
							type="text"
							variant="filled"
						/>
						<TextField
							fullWidth
							margin="dense"
							id="limit"
							label="Лимит"
							type="number"
							variant="filled"
						/>
						<Button variant="contained" endIcon={<SendRounded />} >Send</Button>
					</Paper>
				</Box>
			</Stack>
		</>
	)
}
export default Categories