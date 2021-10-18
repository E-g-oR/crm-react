import { CssBaseline, Typography } from "@mui/material";
import React, { useState } from "react";
import { AccountBalanceWalletRounded, HistoryRounded, NotesRounded, LaunchRounded, CategoryRounded } from "@mui/icons-material";
import { styled } from '@mui/material/styles'
import { Box } from "@mui/system";
import Appbar from "./Appbar";
import Menu, { DrawerHeader } from "./Menu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Account from "../../views/Account/Account";
import History from "../../views/History/History";
import Planning from "../../views/Planning/Planning";
import NewRecord from "../../views/NewRecord/NewRecord";
import Categories from "../../views/Categories/Categories";

export const drawerWidth = 240;

const menu = [
  {
    title: 'Счет',
    url: '/',
    icon: () => <AccountBalanceWalletRounded />
  },
  {
    title: 'История',
    url: '/history',
    icon: () => <HistoryRounded />
  },
  {
    title: 'Планирование',
    url: '/planning',
    icon: () => <NotesRounded />
  },
  {
    title: 'Новая запись',
    url: '/new-record',
    icon: () => <LaunchRounded />
  },
  {
    title: 'Категории',
    url: '/categories',
    icon: () => <CategoryRounded />
  }
]

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);


const MainLayout = () => {
  // const theme = useTheme();


  const [open, setOpen] = useState(true);

  const menuOpen = () => {
    setOpen(true);
  };

  const menuClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Appbar open={open} handleDrawerOpen={menuOpen} />

        <Menu menu={menu} handleDrawerClose={menuClose} open={open} />

        <Main open={open}>
          <DrawerHeader />

          <Switch>
            <Route path="/" exact component={Account} />
            <Route path="/history" component={History} />
            <Route path="/planning" component={Planning} />
            <Route path="/new-record" component={NewRecord} />
            <Route path="/categories" component={Categories} />
            {/* <Route path="/profile" component={} /> */}
          </Switch>


        </Main>
      </Box>
    </>
  )
}

export default MainLayout