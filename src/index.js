import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./store";
import Root from "./pages/index";
import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    <AppProvider>
      <Root />
    </AppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
