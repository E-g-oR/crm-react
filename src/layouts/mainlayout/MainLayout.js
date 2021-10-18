import { CssBaseline, Typography } from "@mui/material";
import React, { useState } from "react";
import { AccountBalanceWalletRounded, HistoryRounded, NotesRounded, LaunchRounded, CategoryRounded } from "@mui/icons-material";
import { styled } from '@mui/material/styles'
import { Box } from "@mui/system";
import Appbar from "./Appbar";
import Menu, { DrawerHeader } from "./Menu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Account from "./Account";
import History from "./History";
import Planning from "./Planning";
import NewRecord from "./NewRecord";
import Categories from "./Categories";

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
          </Switch>

          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
            enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
            imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
            Convallis convallis tellus id interdum velit laoreet id donec ultrices.
            Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
            adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
            nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
            leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
            feugiat vivamus at augue. At augue eget arcu dictum varius duis at
            consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
            sapien faucibus et molestie ac.
          </Typography>
          <Typography paragraph>
            Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
            eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
            neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
            tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
            sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
            tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
            gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
            et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
            tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
            eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
            posuere sollicitudin aliquam ultrices sagittis orci a.
          </Typography>
        </Main>
      </Box>
    </>
  )
}

export default MainLayout