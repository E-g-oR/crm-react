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

interface IRegisterFormState {
	name: string,
	email: string,
	password: string,
	repeatPassword: string,
	showPassword: boolean,
	agreeWithTerms: boolean
}

const RegisterForm = () => {
	const history = useHistory()

	const [values, setValues] = React.useState({
		name: '',
		email: '',
		password: '',
		repeatPassword: '',
		showPassword: false,
		agreeWithTerms: false,
	});

	const handleChange = (prop: keyof IRegisterFormState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.target.value });
	};

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		});
	};

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<Box >
			<DialogTitle>Register</DialogTitle>
			<DialogContent sx={{ width: "100%", maxWidth: "450px" }}  >
				<Stack direction="column" spacing={2} >
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Your name"
						type="text"
						name="name"
						fullWidth
						variant="standard"
					/>
					<TextField
						autoFocus
						margin="dense"
						id="email"
						label="Email Address"
						type="email"
						name="email"
						fullWidth
						variant="standard"
					/>

					<FormControl variant="standard" margin="normal" >
						<InputLabel htmlFor="password">Password</InputLabel>
						<Input
							id="password"
							type={values.showPassword ? 'text' : 'password'}
							name="password"
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
						<InputLabel htmlFor="password-repeat">Repeat password</InputLabel>
						<Input
							id="password-repeat"
							type={values.showPassword ? 'text' : 'password'}
							name="password-repeat"
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