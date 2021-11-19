import React from "react";
import {
	Dialog,
} from "@mui/material";

import './loginLayout.css'
import store, { Store } from "../../utils/store";

const UnauthenticatedLayout = (Component: React.FC<{ store: Store }>) => {
	const Layout: React.FC = (props) => {
		return (
			<div className="login-background">
				<Dialog open={true} >
					<Component store={store} {...props} />
				</Dialog>
			</div>
		)
	}

	return Layout
}

export default UnauthenticatedLayout;