import React from "react";
import ReactDOM from "react-dom/client";
import Hello from "./Hello.jsx";
import App from "./App.jsx";
import HtmlTest from "./HtmlTest.jsx";
import { v4 as uuidv4 } from "uuid";

import "./index.css";

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Greeting() {
  return <Welcome name="sara" />;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") && <li key={animal}>{animal}</li>;
      })}
    </ul>
  );
}

function Animals() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
    </div>
  );
}

const todos = [
  { task: "lift heavy stuff", id: uuidv4() },
  { task: "clean shower window", id: uuidv4() },
  { task: "learn react", id: uuidv4() },
];
console.log(todos);

function Btn() {
  return <button>testy</button>;
}
//passing props
function PropBtn(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
    background: props.background
  };
  return <button style={buttonStyle}>{props.text}</button>;
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Btn />
    <Btn />
    <Btn />
    <PropBtn text="Prop Btn" color="red" background="blue"   />
    <Animals />
    <Greeting />
    <HtmlTest />
    <Hello />

    <App />
  </React.StrictMode>
);
