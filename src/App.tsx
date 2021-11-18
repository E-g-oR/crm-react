import React from 'react';
import {
  Switch,
  Route,
  useHistory
} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import { SnackbarProvider } from 'notistack';
import {
  createTheme,
  useMediaQuery,
  ThemeProvider,
  CssBaseline
} from '@mui/material';
import LoginLayout from './layouts/LoginLayout';
import MainLayout from './layouts/mainlayout/MainLayout';
import { Store } from './utils/store';
import { observer } from 'mobx-react';
import firebaseConfig from './utils/store/authStore/firebaseConfig';


const App: React.FC<{ store: Store }> = observer(({ store }) => {
  const history = useHistory();

  const app = initializeApp(firebaseConfig)

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      history.push('/');
    } else {
      history.push('/login');
    }
  })

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
          <Route path="/login" component={LoginLayout} />
          <Route path="/register" component={LoginLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>
      </SnackbarProvider>
    </ThemeProvider>
  );
})

export default App;
