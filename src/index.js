import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { green, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[900],
    },
    secondary: {
      main: orange[900],
    },
  },
});

ReactDOM.render(
    <ThemeProvider theme={theme}>    
        <App /> </ThemeProvider>,
    document.getElementById('root')
    );
