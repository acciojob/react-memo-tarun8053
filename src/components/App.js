import React, { useState } from "react";
import UseMemo from "./UseMemo";
import ReactMemo from "./ReactMemo";
import "../styles/App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const addCustomTodo = () => {
    if (input.length > 5) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  return (
    <div id="main">
      <h1>Task Management</h1>

      <button id="add-todo-btn" onClick={addTodo}>
        Add Todo
      </button>

      <button id="increment-btn" onClick={increment}>
        Increment
      </button>

      <p id="counter-value">Count: {count}</p>

      <input
        id="memo-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button id="submit-btn" onClick={addCustomTodo}>
        Submit
      </button>

      <UseMemo todos={todos} />
      <ReactMemo todos={todos} />
    </div>
  );
}

export default App;
