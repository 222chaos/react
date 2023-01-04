import React, { useState, useEffect } from 'react';


function TodoListItem(props) {
  const [color, setColor] = useState('white');
  const [opstate, setOp] = useState(0);
  const [hover, setHover] = useState(0);
  const [state, updateState] = useState<string>('asdasd');
  useEffect(() => {
    setOp(1);
  }, []);
  return (
    <>
      <li
        onMouseEnter={() => {
          setColor('yellow');
          setHover(1);
        }}
        onMouseLeave={() => {
          setColor('pink');
          setHover(0);
        }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 1s',
          opacity: opstate,
          background: color,
          color: 'blue',
        }}
      >
        {props.content}
        <div
        style={{
          display:"flex",
          gap:8,
          cursor:"pointer"
        }}>
        {hover === 1 ? <buttton
        onClick={()=>{
           props.swapItem(props.index-1,props.index)
        }}
        >↑</buttton> : null}
       {hover === 1 ? <buttton
        onClick={()=>{
          props.swapItem(props.index,props.index+1)
        }}
        >↓</buttton> : null}
        {hover === 1 ? <buttton
        onClick={()=>{
          props.onDelete(props.index)
        }}
        >×</buttton> : null}
        {hover === 1 ? <input
        value={state}
        onChange={(e) => {
          updateState(e.target.value);
        }}
        ></input> : null}
        {hover === 1 ? <button
        onClick={()=>{
          props.change();
        }}
        >orz</button> : null}
        </div>
      </li>
      {props.splitLine ? <hr /> : null}
    </>
  );
}
export default TodoListItem;
