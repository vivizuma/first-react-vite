import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello.jsx";
import App from "./App.jsx";
import HtmlTest from "./HtmlTest.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HtmlTest />
    <Hello />

    <App />
  </React.StrictMode>
);
