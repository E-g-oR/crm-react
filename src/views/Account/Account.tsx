import React, { useEffect } from "react";
import { observer } from "mobx-react"
import {
	Stack,
	Typography
} from "@mui/material";
import { Store } from "../../utils/store";
import HomeRates from "./HomeRates";
import HomeAccount from "./HomeAccount";
import './account.css'



const Account: React.FC<{ store: Store }> = observer(({ store }) => {
	const ratesStore = store.ratesStore;

	const authStore = store.authStore;
	useEffect(() => {
		authStore.authInfoStore.getFormDB();

	}, []);
	
	return (
		<>
			<Typography component="h1" variant="h4">Счет</Typography>
			<br />
			<Stack
				direction={{ xl: "row", lg: "row", md: "column", sm: "column", xs: "column" }}
				spacing={{ xl: 3, lg: 3, md: 2, sm: 2, xs: 1 }}
			>
				<HomeAccount store={store} />

				<HomeRates store={store} />
			</Stack>
		</>
	)
})
export default Account