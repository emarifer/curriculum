import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { registerSW } from 'virtual:pwa-register';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

registerSW();

/**
 * MARKDOWN IN REACT:
 * https://www.npmjs.com/package/vite-plugin-react-md
 */

/**
 * PASAR UNA PROPS A UN STYLED COMPONENT PARA QUE CAMBIE ALGUNOS DE SUS ATRIBUTOS CSS
 * DE FORMA CONDICIONAL, P.EJ, UNA ANIMACION. VER:
 * https://stackoverflow.com/questions/44459813/adding-transitions-to-styled-components#57586503
 */
