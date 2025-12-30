import React, { useMemo } from "react";

function UseMemo({ todos, addTodo }) {
  const totalTodos = useMemo(() => todos.length, [todos]);

  return (
    <div id="use-memo">
      <h3>Total Todos (useMemo)</h3>
      <p>{totalTodos}</p>

      
      <button onClick={addTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
