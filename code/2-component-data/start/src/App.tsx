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
  function swapItem( index1, index2) {
    var temp = todo[index1];
    todo[index1] = todo[index2];
    todo[index2] = temp;
    setTodo([...todo])
  }
  const [todo, setTodo] = useState<Array<string>>([]);
  const [state, updateState] = useState<string>('asdasd');
  
  return (
    
    <article>
      <div>
        <title>
      <h1>Todo</h1>
      </title>
      <title>
        <desc>
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
      </desc>
      </title>
      
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
            onDelete={onDelete}
            index={index}
            swapItem={swapItem}
          />
        );
      })}
      </ul>
      </div>
    </article>
  );
}
export default App;
