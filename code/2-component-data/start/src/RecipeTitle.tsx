import React, { useState, useEffect } from "react";

function TodoListItem(props) {
  const [hover, setHover] = useState("white");
  const [opstate, setOp] = useState(0);
  useEffect(() => {
    setOp(1);
  });

  return (
    <>
      <li
        onMouseEnter={() => {
          setHover("yellow");
        }}
        onMouseLeave={() => {
          setHover("pink");
        }}
        style={{
          transition: "all 1s",
          opacity: opstate,
          background: hover,
          color: "blue",
        }}
      >
        {props.content}
      </li>
      {props.splitLine ? <hr /> : null}
    </>
  );
}

export default TodoListItem;
