import "./index.css";
import React, { useState } from "react";
function App() {
  const todoList = {
    title: "Todo",
    list: [],
  };
  let i = 0;
  function change() {
    setTodo([...todo, state]);
    updateState("");
  }
  const [todo, setTodo] = useState(todoList.list);
  const [state, updateState] = useState("asdasd");
  return (
    <article>
      <h1>Todo</h1>
      <input
        value={state}
        onChange={(e) => {
          updateState(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            change();
            i++;
            console.log(todo);
          }
          if (i / 5 == 0) {
            console.log(i);
            setTodo([...todo, "___"]);
            updateState("");
            i++;
          }
        }}
      ></input>
      <button
        onClick={() => {
          console.log(todo);
          change();
        }}
      >
        Orz
      </button>
      <ui>
        <a>{state}</a>
        {todo.map((item) => (
          <li>{item}</li>
        ))}
      </ui>
    </article>
  );
}
export default App;
