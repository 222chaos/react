import React, { useState } from "react";
function TodoListItem(props) {
  const [hover, setHover] = useState("black");
  return (
    <li
      onMouseEnter={() => {
        setHover("pink");
      }}
      onMouseLeave={() => {
        setHover("yellow");
      }}
      style={{
        background: hover,
        color: "orange",
      }}
    >
      {props.content}
    </li>
  );
}

export default TodoListItem;
