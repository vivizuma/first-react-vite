import React, { useState } from "react";
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
function Heading(props) {
  return <h2>{props.text}</h2>;
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

function Button(props) {
  const buttonStyle = {
    color: props.color,
    fontSize: props.fontSize + "px",
  };
  return <button style={buttonStyle}>{props.text}</button>;
}
function Button2() {
  return <button>Don't click me!</button>;
}

// STATE IN REACT
// INTRODUCTION TO STATE
// concepts: * State is a component's memory
//* reconciliation algorithm: rerendering generates a new virtual dom element
// the algo compares the new virtual dom to old one an determines the minimal set of
// changes that need to occur to change the actual DOM

const COLORS = ["pink", "green", "blue", "yellow", "purple"];

function ColorsDiv(props) {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  return <div className="block">sss</div>;
}
function SayHello(props) {
  const greeting = "Hello ";
  const greetings = ["Hey", "Yo", "Whaddup", "eyo"];
  return (
    <div>
      {greeting}
      {greetings[props.value] + ", "}
      {props.text}
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SayHello text="John" value="2" />
    <Heading text="Props" />
    <Button text="Click Me!" color="blue" fontSize={12} />
    <Button2 />
    <Button text="Don't click me!" color="red" fontSize={12} />
    <Animals />
    <Greeting />
    <HtmlTest />
    <Hello />
    <Heading text="State" />
    <ColorsDiv />
  </React.StrictMode>
);
