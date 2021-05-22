import React from "react";
// 不要
// import "../style.css";

export const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      <input placeholder="ToDoを入力" value={todoText} onChange={onChange} />
      <button id="add-button" onClick={onClick}>
        追加
      </button>
    </div>
  );
};
