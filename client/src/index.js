import store from "app/store";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "utils/ScrollToTop";
import SnackbarProvider from "utils/SnackProvider";
import App from "./App";
import "./fonts/SVN-Veneer.ttf";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <ScrollToTop>
          <SnackbarProvider>
            <App />
          </SnackbarProvider>
        </ScrollToTop>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
