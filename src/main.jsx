import 'reset-css';
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import {HashRouter} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App/>
  </HashRouter>
);
