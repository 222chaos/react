import "./index.css";
import React, { useState } from "react";
function App() {
  const todoList = {
    title: "Todo",
    list: [],
  };

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
            todo.push(state);
            updateState("");
          }
        }}
      ></input>
      <button
        onClick={() => {
          todo.push(state);
          updateState("");
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
