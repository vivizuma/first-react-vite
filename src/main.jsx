import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello.jsx";
import App from "./App.jsx";
import HtmlTest from "./HtmlTest.jsx";

import "./index.css";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Greeting() {
  return <Welcome name="sara" />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Greeting />
    <HtmlTest />
    <Hello />

    <App />
  </React.StrictMode>
);
