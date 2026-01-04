import React, { useState, useMemo } from "react";
import "../styles/App.css";

/* ---------------- ReactMemo Component ---------------- */
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

/* ---------------- UseMemo Component ---------------- */
function UseMemoComponent({ todos }) {
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

/* ---------------- App Component ---------------- */
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

      {/* Components defined in same file */}
      <UseMemoComponent todos={todos} />
      <ReactMemo todos={todos} />
    </div>
  );
}

export default App;
