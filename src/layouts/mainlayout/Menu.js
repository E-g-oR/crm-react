import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Link, useHistory } from "react-router-dom";
import { drawerWidth } from "./MainLayout";

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const Menu = ({ handleDrawerClose, menu, open }) => {
	const theme = useTheme();
	const history = useHistory()
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="persistent"
			anchor="left"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'ltr' ? <ChevronLeftRounded /> : <ChevronRightRounded />}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{/* <BrowserRouter> */}
				{menu.map((item) => (
					<ListItem button onClick={() => { history.push(item.url) }} key={item.title}>
						<ListItemIcon>
							{item.icon()}
						</ListItemIcon>
						<ListItemText primary={item.title} />
					</ListItem>
				))}
				{/* </BrowserRouter> */}
			</List>
			<Divider />
		</Drawer>
	)
}

export default Menu;