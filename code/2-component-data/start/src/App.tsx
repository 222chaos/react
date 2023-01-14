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
  function swapItem(index1, index2) {
    var temp = todo[index1];
    todo[index1] = todo[index2];
    todo[index2] = temp;
    setTodo([...todo]);
  }
  const [todo, setTodo] = useState<Array<string>>([]);
  const [state, updateState] = useState<string>('0');
  const [stateTitle,updateStateTitle] = useState<string>('im title')
  const [stateDesc,updateStateDesc] = useState<string>('im desc')
  const [todo1, setTode] = useState(()=>{
    const todoList=[]
    for(let index=0;index<100;index++){
      todoList.push({
        title:"title"+index,
        desc:"desc"+index
      })
    }
    return todoList
  });
  
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
            setTodo([...todo, state]);
            updateState('');
          }
        }}
      ></input>
       <button
         onClick={() => {
          change()
        
      }}
      >
        Orz
      </button>
      <input 
      value={stateTitle}
      onChange={(e) => {
        updateStateTitle(e.target.value);
      }}
      >
      </input>
      <button
         onClick={() => {
          if(stateDesc===""){
              window.alert("There is no content in desc")
              return
          }
          setTode([...todo1, { title: stateTitle, desc: stateDesc }]);
          updateStateTitle('');
          updateStateDesc('')
        
      }}
      >
        Title
      </button>
      <input
      value={stateDesc}
      onChange={(e) => {
        updateStateDesc(e.target.value);
      }}
      ></input>
       <button
         onClick={() => {
          if(stateTitle===""){
            window.alert("There is no content in title")
            return
          }
          setTode([...todo1, { title: stateTitle, desc: stateDesc }]);
          updateStateDesc('')
      }}
      >
        Desc
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
        {todo1.map((obj) => {
          return (
            <li>
              <div>{obj.title}</div>
              <div
              style={{
                border:'true',
                color:"pink",
                padding: 8,
                fontSize:15
              }}>{obj.desc}</div>
              <hr></hr>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
export default App;
