import React, { useState, useEffect } from 'react';
interface TodoListItemtype {
  content: string;
  splitLine: string;
}
const TodoListItem: React.FC<TodoListItemtype> = (props) => {
  const [hover, setHover] = useState<string>('white');
  const [opstate, setOp] = useState<number>(0);
  useEffect(() => {
    setOp(1);
  });

  return (
    <>
      <li
        onMouseEnter={() => {
          setHover('yellow');
        }}
        onMouseLeave={() => {
          setHover('pink');
        }}
        style={{
          transition: 'all 1s',
          opacity: opstate,
          background: hover,
          color: 'blue',
        }}
      >
        {props.content}
      </li>
      {props.splitLine ? <hr /> : null}
    </>
  );
};

export default TodoListItem;
