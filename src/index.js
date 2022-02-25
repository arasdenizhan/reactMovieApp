import './index.css'
import {Menu} from "./NavMenu";
import React from 'react';
import ReactDOM from 'react-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "@fontsource/jetbrains-mono/";
import {theme} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import Movies from "./Movies";


function App() {
  return (
      <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div>
              <Menu/>
          </div>
          <div>
              <Movies/>
          </div>
      </ThemeProvider>
  );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
