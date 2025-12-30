import React, { useState } from "react";

const ReactMemo = React.memo(({ todos, addCustomTodo }) => {
  const [skill, setSkill] = useState("");

  return (
    <div id="react-memo">
      <h3>Todo List (React.memo)</h3>

      {/* REQUIRED FOR CYPRESS */}
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      <button
        onClick={() => {
          addCustomTodo(skill);
          setSkill("");
        }}
      >
        Add Skill
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
});

export default ReactMemo;
