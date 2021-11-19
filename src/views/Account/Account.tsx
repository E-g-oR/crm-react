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
	const TableRowsData = ratesStore.rates;

	const authStore = store.authStore;
	useEffect(() => {
		authStore.authInfoStore.getFormDB();

	}, [])
	return (
		<>
			<Typography component="h1" variant="h4">Счет</Typography>
			<br />
			<Stack
				direction={{ xs: 'column', sm: 'column', md: 'row' }}
				spacing={{ xs: 1, sm: 2, md: 4 }}
			>
				<HomeAccount store={store} />

				<HomeRates store={store} />
			</Stack>
		</>
	)
})
export default Account