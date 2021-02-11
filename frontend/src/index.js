import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import store from "./store"

import theme from "./theme"
import { MuiThemeProvider } from "@material-ui/core"

import App from "./App"
import "./index.css"

// const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
)
