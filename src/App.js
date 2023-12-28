import React, { useState } from "react";
import "./App.css";

function App() {
  // todoList의 state
  const [todos, setTodos] = useState([{ id: 0, body: "react를 배워봅시다." }]);
  // input value값 state 변경 감지
  const [body, setBody] = useState("");
  // input value handler
  const inputValueHandler = (event) => {
    setBody(event.target.value);
  };
  // 추가하기 버튼 클릭하여 todoList 추가
  const addTodoListHandler = () => {
    const newTodo = {
      id: todos.length + 1,
      body,
    };
    setTodos([...todos, newTodo]);
    setBody("");
  };
  return (
    <div className="layout">
      {/* header 파트 todoList 추가 */}
      <div className="header">
        <div className="header-function">
          <input
            className="header-input"
            type="text"
            onChange={inputValueHandler}
            value={body}
          />
          <button className="header-btn" onClick={addTodoListHandler}>
            추가하기
          </button>
        </div>

        <h1 className="header-title">Todo List</h1>
      </div>
      {/* main todoList 렌더링 */}
      <div className="list-container">
        {todos.map((todo) => {
          console.log("todo의 값 확인 =>", todo);
          return (
            <div key={todo.id} className="todo">
              <div>{todo.body}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
