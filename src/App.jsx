import React, { useState } from "react";
import "./style.css";

// ToDo App
export const App = () => {
  const [todoText, setTodoText] = useState("");
  // const [incompleteTodos, setIncompleteToDos] = useState(["aaa", "aaaaaa"]);
  // const [completeTodos, setCompleteToDos] = useState(["a", "aaa"]);
  const [incompleteTodos, setIncompleteToDos] = useState([]);
  const [completeTodos, setCompleteToDos] = useState([]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAddTodo = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteToDos(newTodos);
    setTodoText("");
  };
  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
  };
  const onClickComplete = (todo, index) => {
    // 未完了から削除
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteToDos(newTodos);
    // 完了済みに移動
    const newCompleteTodos = [...completeTodos, todo];
    setCompleteToDos(newCompleteTodos);
  };
  const onClickReturn = (todo, index) => {
    // 完了済みから削除
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    setCompleteToDos(newCompleteTodos);
    // 未完了に移動
    const newTodos = [...incompleteTodos, todo];
    setIncompleteToDos(newTodos);
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="ToDoを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAddTodo}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のToDo</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickComplete(todo, index)}>
                    完了
                  </button>
                  <button onClick={() => onClickDelete(index)}>削除</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了済みのToDo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <li key={todo}>
                <div className="list-row">
                  <p>{todo}</p>
                  <button onClick={() => onClickReturn(todo, index)}>
                    戻す
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
