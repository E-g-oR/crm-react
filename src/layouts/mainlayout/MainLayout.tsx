import React, { ReactElement, useState } from "react";
import {
  AccountBalanceWalletRounded,
  HistoryRounded,
  NotesRounded,
  LaunchRounded,
  CategoryRounded
} from "@mui/icons-material";
import { Box } from "@mui/system";
import Appbar from "./Appbar";
import Menu, { DrawerHeader } from "./Menu";
import { Switch, Route } from "react-router-dom";
import Account from "../../views/Account/Account";
import History from "../../views/History/History";
import Planning from "../../views/Planning/Planning";
import NewRecord from "../../views/NewRecord/NewRecord";
import Categories from "../../views/Categories/Categories";
import store from "../../utils/store";

export const drawerWidth = 240;

export interface IMenuItem {
  title: string,
  url: string,
  icon: ReactElement<any, any>,
}

export type IMenu = IMenuItem[];

const menu: IMenu = [
  {
    title: 'Счет',
    url: '/',
    icon: <AccountBalanceWalletRounded />
  },
  {
    title: 'История',
    url: '/history',
    icon: <HistoryRounded />
  },
  {
    title: 'Планирование',
    url: '/planning',
    icon: <NotesRounded />
  },
  {
    title: 'Новая запись',
    url: '/new-record',
    icon: <LaunchRounded />
  },
  {
    title: 'Категории',
    url: '/categories',
    icon: <CategoryRounded />
  }
]

const MainLayout = () => {
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

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Route path="/"  >
            <Account store={store} />
          </Route>
          <Route path="/history" component={History} />
          <Route path="/planning" component={Planning} />
          <Route path="/new-record" component={NewRecord} />
          <Route path="/categories" component={Categories} />
        </Box>
      </Box>
    </>
  )
}

export default MainLayout