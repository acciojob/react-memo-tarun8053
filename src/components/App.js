import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  // Add default todo
  const addTodo = () => {
    setTodos((prev) => [...prev, "New todo"]);
  };

  // Increment counter
  const increment = () => {
    setCount((prev) => prev + 1);
  };

  // Add custom todo (skill)
  const addCustomTodo = (value) => {
    if (value.length > 5) {
      setTodos((prev) => [...prev, value]);
    }
  };

  return (
    <div id="main">
      <h1>Task Management</h1>

      {/* Counter */}
      <button id="increment-btn" onClick={increment}>
        Increment
      </button>

      <p id="counter-value">Count: {count}</p>

      {/* useMemo Component */}
      <UseMemo todos={todos} addTodo={addTodo} />

      {/* React.memo Component */}
      <ReactMemo todos={todos} addCustomTodo={addCustomTodo} />
    </div>
  );
}

export default App;
