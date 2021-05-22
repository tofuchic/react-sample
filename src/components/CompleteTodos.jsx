import React from "react";

const completeArea = {
  backgroundColor: "moccasin",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { completeTodos, onClick } = props;
  return (
    <div style={completeArea}>
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
