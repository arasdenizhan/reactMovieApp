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
import {Create} from "./Create";
import {Update} from "./Update";
import {Delete} from "./Delete";
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
      <main>
          <ThemeProvider theme={theme}>
              <CssBaseline/>
              <div>
                  <Menu/>
              </div>
              <div>
                  <Switch>
                      <Route path="/" component={Movies} exact />
                      <Route path="/create" component={Create} />
                      <Route path="/update" component={Update} />
                      <Route path="/delete" component={Delete} />
                  </Switch>
              </div>
          </ThemeProvider>
      </main>
  );
}

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
