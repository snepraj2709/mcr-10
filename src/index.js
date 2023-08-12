import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DataContext, DataProvider } from "./context/DataContext";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

const rootElement = document.getElementById("root");
export { DataContext, ThemeContext };

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
