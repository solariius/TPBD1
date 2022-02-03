import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Pagamento from "./pages/pagamento/view/Pagamento";
import reportWebVitals from "./reportWebVitals";

import Cardapio from "./pages/cardapio/view/Cardapio";
import Edicao from "./pages/edicao/view/Edicao";
// import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Pagamento />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
