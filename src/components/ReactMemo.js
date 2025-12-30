import React from "react";

const ReactMemo = React.memo(({ todos }) => {
  return (
    <div id="react-memo">
      <h3>Todo List (React.memo)</h3>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
