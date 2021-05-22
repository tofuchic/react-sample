import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";
import { ColorfulMessage } from "./components/ColorfulMessage";

// ToDo App
export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteToDos] = useState([]);
  const [completeTodos, setCompleteToDos] = useState([]);
  const onChangeTodoText = (event) => {
    setTodoText(event.target.value);
  };
  const onClickAddTodo = () => {
    if (todoText === "" || incompleteTodos.length >= 5) return;
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
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAddTodo}
      />
      {incompleteTodos.length >= 5 && (
        <ColorfulMessage
          color="red"
          message="登録できるToDoの数は5つまでにしましょう。"
        ></ColorfulMessage>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClick={onClickReturn} />
    </>
  );
};
