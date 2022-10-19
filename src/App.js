import { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Meet Masao for Udon" },
    { id: 2, content: "Fix up these horrible React notes" },
  ]);
  return (
    <div className="App">
      <h1>Things To Do</h1>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}
