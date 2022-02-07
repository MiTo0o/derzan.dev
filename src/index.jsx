import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
{
  /* <Route path="expenses" element={<Expenses />} />
<Route path="invoices" element={<Invoices />} /> */
}
