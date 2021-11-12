import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
	Button,
	DialogActions,
	DialogContent, 
	DialogTitle, 
	FormControl, 
	IconButton, 
	Input, 
	InputAdornment, 
	InputLabel, 
	Stack, 
	TextField, 
	Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";

const RegisterForm = () => {
	const history = useHistory()

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
		<Box>
			<DialogTitle>Register</DialogTitle>
			<DialogContent>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
					variant="standard"
				/>
				<Stack >
					<FormControl variant="standard" margin="normal" >
						<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
						<Input
							id="standard-adornment-password"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
					<FormControl variant="standard" margin="normal" >
						<InputLabel htmlFor="standard-adornment-password">Repeat password</InputLabel>
						<Input
							id="standard-adornment-password"
							type={values.showPassword ? 'text' : 'password'}
							value={values.password}
							onChange={handleChange('password')}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
									>
										{values.showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
						/>
					</FormControl>
				</Stack>

			</DialogContent>
			<DialogActions>
				<Button variant="contained" onClick={() => { history.push('/') }}>Register</Button>
			</DialogActions>
			<DialogContent>
				<Typography>Already have an account? <Button onClick={() => { history.push('/login') }}>Sign In</Button></Typography>
			</DialogContent>
		</Box >
	)
}

export default RegisterForm;