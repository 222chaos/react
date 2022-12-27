import './index.css';
import React, { useEffect, useState } from 'react';
import TodoListItem from './RecipeTitle';
function change() {
  setTodo([...todo, state]);
  updateState('');
}
const [todo, setTodo] = useState(Symbol({ id: 0, text: [] }));
const [state, updateState] = useState('asdasd');
useEffect(() => {});
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
        return <TodoListItem content={item} splitLine={(index + 1) % 5 === 0} />;
      })}
    </ul>
  </article>
);
export default App;
