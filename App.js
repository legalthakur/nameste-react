const heading = React.createElement("h1", {id : "heading"}, "hello world from react")

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {id:"child 1"}, "this is h1"), React.createElement("h1", {id: "child2"}, "this is h2")]
  )
);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)