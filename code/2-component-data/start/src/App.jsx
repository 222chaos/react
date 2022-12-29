import './index.css';
import React, { useEffect, useState } from 'react';
import TodoListItem from './RecipeTitle';
function change() {
  setTodo([...todo, state]);
  updateState('');
}
const [todo, setTodo] = useState([]);
const [state, updateState] = useState('asdasd');
useEffect(() => {});
function onDelete(index) {
  todo.splice(index, 1);
  setTodo([...todo]);
}
return (
  <article>
    <h1>Todo</h1>

    <input
      value={state}
      onChange={(e) => {
        updateState(e.target.value);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          change();
        }
      }}
    ></input>
    <button onClick={() => onRemove(todo)}>Remove</button>
    <button
      onClick={() => {
        console.log(todo);
        change();
      }}
    >
      Orz
    </button>
    <ul>
      <a>{state}</a>
      {todo.map((item, index) => {
        return (
          <TodoListItem
            content={item}
            splitLine={(index + 1) % 5 === 0}
            way={onDelete({ index })}
          />
        );
      })}
    </ul>
  </article>
);
export default App;
