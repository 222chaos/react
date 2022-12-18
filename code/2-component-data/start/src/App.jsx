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
        onChange={(e) => {
          updateState(e.target.value);
        }}
        onKeyDown={(e) => {
          console.log(e);
          if (e.key === "Enter") {
            todo.push(e.target.value);
            setTodo([...todo]);
          }
        }}
      ></input>
      <button
        onClick={() => {
          todo.push(state);
          setTodo([...todo]);
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
