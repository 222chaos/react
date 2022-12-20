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
            setTodo([...todo, state]);
            updateState("");
          }
        }}
      ></input>
      <button
        onClick={() => {
          console.log(todo);
          setTodo([...todo, state]);
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
