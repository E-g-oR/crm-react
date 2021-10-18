import { createTheme, useMediaQuery, ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginLayout from './layouts/LoginLayout';
import Account from './views/Account/Account';
import Categories from './views/Categories/Categories';
import MainLayout from './layouts/mainlayout/MainLayout';
import NewRecord from './views/NewRecord/NewRecord';
import Planning from './views/Planning/Planning';

const App = () => {

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
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginLayout} />
          <Route path="/register" component={LoginLayout} />
          <Route path="/" component={MainLayout} />
        </Switch>

      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
