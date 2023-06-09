import { useState } from "react";
import Header from "./Components/Header";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const todos = [
  { id: 1, content: "Tomar agua", completed: true },
  { id: 2, content: "Finalizar práctica de estados y props", completed: false },
  { id: 3, content: "Tomar agua", completed: false },
  {
    id: 4,
    content: "Compartir lo aprendido con algún compañero",
    completed: false,
  },
  { id: 5, content: "Probar pizza italiana", completed: false },
  { id: 6, content: "Completar el desafío del sprint 3", completed: false },
];

function App() {
  const [changeMode, setChangeMode] = useState(true);
  const [todoList, setTodoList] = useState(todos);

  function addNewTodo(newToDo) {
    setTodoList([...todoList, newToDo]);
  }
  function isComplete(id) {
    const updateTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodoList(updateTodoList);
  }
  function deleteTodo(id) {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  }
  return (
    <div className={changeMode ? "AppDark" : "AppLight"}>
      <Header changeMode={changeMode} setChangeMode={setChangeMode} />
      <main>
        <TodoForm todoList={todoList} onAddTodo={addNewTodo} />
        <TodoList
          todoList={todoList}
          isComplete={isComplete}
          changeMode={changeMode}
          deleteTodo={deleteTodo}
        />
      </main>

      <footer>
        <p>Full Stack Developer Bootcamp</p>
        <p>Pan dulce by Damián Coalla</p>
      </footer>
    </div>
  );
}

export default App;
