import React, { useMemo } from "react";

function UseMemo({ todos }) {
  const totalTodos = useMemo(() => {
    return todos.length;
  }, [todos]);

  return (
    <div id="use-memo">
      <h3>Total Todos (useMemo)</h3>
      <p>{totalTodos}</p>
    </div>
  );
}

export default UseMemo;
