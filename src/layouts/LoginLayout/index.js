import React from "react";
import { Route, Switch } from "react-router";
import {
	Dialog,
} from "@mui/material";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

import './loginLayout.css'
import store from "../../utils/store";

const LoginLayout = () => {

	return (
		<div className="login-background">
			<Dialog open={true} >
				<Switch>
					<Route path="/login" >
						<LoginForm store={store} />
					</Route>
					<Route path="/register"  >
						<RegisterForm store={store} />
					</Route>
				</Switch>
			</Dialog>
		</div>
	)
}

export default LoginLayout