import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";

import {GlobalStyle} from "./assets/styles/global";
import {THEME_DEFAULT} from "./assets/styles/themes";
import App from "./components/App";
import {withStore} from "./store/withStore";

const Main = withStore(App);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME_DEFAULT}>
      <GlobalStyle />
      <Main />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
