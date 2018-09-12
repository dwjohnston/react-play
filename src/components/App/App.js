import React, { Component } from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import blue from '@material-ui/core/colors/blue';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: blue
  }
});


export default function App() {
  return (
    <MuiThemeProvider theme={theme}>

      <React.Fragment>
        <CssBaseline />

        <ErrorBoundary>
          Error Boundary Here


         <Button variant="contained" color="primary">
            Hello World
    </Button>
        </ErrorBoundary>

      </React.Fragment>
    </MuiThemeProvider>
  );
}


