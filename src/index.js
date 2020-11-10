import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux_store";
import MainApp from "./App";

let renderEntireTree = (state) => {
  ReactDOM.render(<MainApp /> ,document.getElementById("root"));
};
renderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
