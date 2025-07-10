// add to the top
import React from "react";
import { createRoot } from "react-dom/client";


const Pet = () => {
  return React.createElement("div", {}, [
    React.createElement("h2", null, "Adopt Me!"),
    React.createElement("h3", null, "Hello from React!"),
    React.createElement("p", null, "This is a simple React application.")
  ]);
};
const App = () => {
  return React.createElement("div", { id: "app" }, [
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ])
}


// Your code is going to go here
const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App))