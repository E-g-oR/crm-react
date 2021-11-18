import React, { useState } from "react";
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
	TextField,
	Typography
} from "@mui/material";
import { Box } from "@mui/system";
import { useHistory } from "react-router";
import { Store } from "../../utils/store";
import { observer } from "mobx-react";
import { getAuth } from "@firebase/auth";
import { useController, UseControllerProps, useForm } from "react-hook-form";

interface ILoginForm {
	email: string,
	password: string
}

const EmailField = (props: UseControllerProps<ILoginForm>) => {
	const { field, fieldState } = useController(props);
	return (
		<FormControl fullWidth>
			<TextField
				{...field}
				error={!!fieldState.error}
				autoFocus
				margin="dense"
				id="name"
				label="Your email"
				type="email"
				variant="standard"
			/>
		</FormControl>
	)
}

const PasswordField = (props: UseControllerProps<ILoginForm>) => {
	const { field, fieldState } = useController(props);

	const [ShowPassword, setShowPassword] = useState<boolean>(false);
	const handleClickShowPassword = () => setShowPassword(true);
	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

	return (
		<FormControl variant="standard" margin="normal" fullWidth >
			<InputLabel htmlFor="password">Password</InputLabel>
			<Input
				id="password"
				{...field}
				error={!!fieldState.error}
				type={ShowPassword ? 'text' : 'password'}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="show password"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
						>
							{ShowPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
	)
}


const LoginForm: React.FC<{ store: Store }> = observer(({ store }) => {
	const history = useHistory();
	const { control, handleSubmit} = useForm<ILoginForm>({
		defaultValues: {
			email: '',
			password: ''
		},
		mode: "onChange"
	})

	const onSubmit = (data: ILoginForm) => {
		const auth = getAuth();
		store.authStore.login(auth, data);
	}

	return (
		<Box >
			<DialogTitle>Login</DialogTitle>
			<form onSubmit={handleSubmit(onSubmit)}>
				<DialogContent>
					<EmailField control={control} name="email" />
					<PasswordField control={control} name="password" />
				</DialogContent>
				<DialogActions>
					<Button variant="contained" type="submit" >Log In</Button>
				</DialogActions>
			</form>
			<DialogContent>
				<Typography>Dont have an account? <Button onClick={() => { history.push('/register') }}>Register</Button></Typography>
			</DialogContent>
		</Box>
	)
})

export default LoginForm;