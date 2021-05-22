import React from "react";
// 不要
// import "../style.css";

export const CompleteTodos = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div className="complete-area">
      <p className="title">完了済みのToDo</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className="list-row">
                <p>{todo}</p>
                <button onClick={() => onClick(todo, index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
