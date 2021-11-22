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
import store from "../../utils/store";
import './categories.css'
import CategoriesCreate from "./CategoriesCreate";
import CategoriesEdit from "./CategoriesEdit";
const Categories = () => {
	return (
		<>
			<Typography component="h1" variant="h4">Категории</Typography>
			<br />
			<Stack
				direction={{ xs: 'column', sm: 'column', md: 'row' }}
				spacing={{ xs: 2, sm: 2, md: 4 }}
			>
				<CategoriesCreate />

				<CategoriesEdit store={store} />
			</Stack>
		</>
	)
}
export default Categories