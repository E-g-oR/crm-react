import { ChevronLeftRounded, ChevronRightRounded } from "@mui/icons-material";
import { Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Tooltip } from "@mui/material";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import React from "react";
import { useHistory } from "react-router-dom";
import { drawerWidth, IMenu } from "./MainLayout";



// const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(9)} + 1px)`,
	},
});

export const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		width: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		boxSizing: 'border-box',
		...(open && {
			...openedMixin(theme),
			'& .MuiDrawer-paper': openedMixin(theme),
		}),
		...(!open && {
			...closedMixin(theme),
			'& .MuiDrawer-paper': closedMixin(theme),
		}),
	}),
);


const Menu: React.FC<{ handleDrawerClose: () => void, menu: IMenu, open: boolean }> = ({ handleDrawerClose, menu, open }) => {
	const theme = useTheme();
	const history = useHistory()
	return (
		<Drawer
			variant="permanent"
			open={open}
		>
			<DrawerHeader>
				<IconButton onClick={handleDrawerClose}>
					{theme.direction === 'ltr' ? <ChevronLeftRounded /> : <ChevronRightRounded />}
				</IconButton>
			</DrawerHeader>
			<Divider />
			<List>
				{menu.map((item) => (
					<Tooltip title={item.title} placement="right" key={item.title}>
						<ListItem button onClick={() => { history.push(item.url) }} >
							<ListItemIcon>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.title} />
						</ListItem>
					</Tooltip>
				))}
			</List>
			<Divider />
		</Drawer>
	)
}

export default Menu;