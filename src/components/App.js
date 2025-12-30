import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  const addSkill = (value) => {
    if (value.length > 5) {
      setTodos((prev) => [...prev, value]);
    }
  };

  return (
    <div id="main">
      <h1>Task Management</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Count: {count}</p>

      <UseMemo todos={todos} addTodo={addTodo} />
      <ReactMemo todos={todos} addSkill={addSkill} />
    </div>
  );
}

export default App;
