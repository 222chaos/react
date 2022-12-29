import './index.css';
import React, { useState } from 'react';
import TodoListItem from './RecipeTitle';
function App() {
  function change() {
    setTodo([...todo, state]);
    updateState('');
  }
  function onDelete(index) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }
  const [todo, setTodo] = useState<Array<string>>([]);
  const [state, updateState] = useState<string>('asdasd');
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
        return (
          <TodoListItem
            content={item}
            splitLine={(index + 1) % 5 === 0}
            button={onDelete(index)}
          />
        );
      })}
      </ul>
    </article>
  );
}
export default App;
