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
  const [todo1,setTode] = useState([]);
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
          change();
        }}
      >
        Orz
      </button>
      <button
        onClick={() => {
          
          setTode([{ title:"123",desc:"1234"}])
          console.log(todo1)
          {todo1.map((obj)=>{
            return(<li> <div>{obj.title}</div> <div>{obj.desc}</div></li>)}
  )}}}
      >
       test
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
            change={change}
          />
        );
      })}
      
      </ul>
    </article>
  );
}
export default App;
