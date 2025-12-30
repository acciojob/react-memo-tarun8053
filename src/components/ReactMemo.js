import React, { useState } from "react";

const ReactMemo = React.memo(({ todos, addSkill }) => {
  const [skill, setSkill] = useState("");

  return (
    <div id="react-memo">
      <h3>Todo List (React.memo)</h3>

      {/* 🔴 INPUT MUST BE DIRECTLY HERE */}
      <input
        type="text"
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
      />

      {/* 🔴 BUTTON MUST BE DIRECTLY HERE */}
      <button
        onClick={() => {
          addSkill(skill);
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
