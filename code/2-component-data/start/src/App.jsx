import "./index.css";
import React, { useState } from "react";
function App() {
  const todoList = {
    title: "Todo",
    list: ["1", "2"],
  };
  const [todo, setTodo] = useState(todoList.list);
  console.log(todo);

  return (
    <article>
      <h1>Todo</h1>
      <input
        onChange={(e) => {
          console.log(e.target.value);
        }}
      ></input>
      <ui>
        {todo.map((item) => (
          <li>{item}</li>
        ))}
      </ui>
    </article>
  );
}
export default App;
