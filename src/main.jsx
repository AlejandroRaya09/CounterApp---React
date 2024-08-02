import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./style.css";
import {CounterApp} from "./CounterApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola Soy un titulo" subtitulo="SSUBTITULO"/> */}
    {/* <FirstApp title="Hola Soy un titulo" subtitulo=" "/> */}
    <CounterApp value={123}/>
  </React.StrictMode>
);
