import React from "react";
import ReactDOM from "react-dom/client";
import { FirstApp } from "./FirstApp";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <FirstApp title="Hola Soy un titulo" subtitulo="SSUBTITULO"/> */}
    <FirstApp title="Hola Soy un titulo" subtitulo=" "/>
  </React.StrictMode>
);
