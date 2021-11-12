import React from "react";
import { Route, Switch } from "react-router";
import {
	Dialog,
} from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import './loginLayout.css'

const LoginLayout = () => {

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