import React, { useEffect, useState } from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { observer } from 'mobx-react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SnackbarProvider } from 'notistack';
import {
  createTheme,
  useMediaQuery,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import { Store } from '../../utils/store';
import Routes from './Routes';


const Root: React.FC<{ store: Store }> = observer(({ store }) => {
  const history = useHistory();
  const auth = getAuth();

  const authStore = store.authStore;
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      authStore.setUser(user)
      if (user) {
        history.push('/');
      } else {
        history.push('/login');
      }
    })
  }, [])

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <CssBaseline />
        <Switch>
          <Routes />
        </Switch>
      </SnackbarProvider>
    </ThemeProvider>
  );
})

export default Root;
