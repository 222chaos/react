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
        {todo.map((item, index) => {
          if ((index + 1) % 5 == 0) {
            return (
              <>
                <li>{item}</li>
                <hr></hr>
              </>
            );
          } else {
            return <li>{item}</li>;
          }
        })}
      </ui>
    </article>
  );
}
export default App;
