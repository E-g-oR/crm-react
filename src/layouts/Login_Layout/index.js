import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FilledInput, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Route, Switch } from "react-router";
import LoginForm from "./LoginForm";
import './loginLayout.css'
import RegisterForm from "./RegisterForm";

const LoginLayout = () => {
	const [values, setValues] = React.useState({
		amount: '',
		password: '',
		weight: '',
		weightRange: '',
		showPassword: false,
	});

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	return (
		<div className="login-background">
			<Dialog open={true}  >
				<Switch>
					<Route path="/login" component={LoginForm} />
					<Route path="/register" component={RegisterForm} />
				</Switch>
			</Dialog>
		</div>
	)
}

export default LoginLayout