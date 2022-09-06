import AddForm from "./AddForm";
import TodoList from "./TodoList";
import FilterBar from "./FilterBar";
import {useEffect, useState} from "react";

const TodoApp = () => {

  const [todoList, setTodoList] = useState(
    localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []
  )

  const [filteredList, setFilteredList] = useState([])

  const [activeTab, setActiveTab] = useState("All")

  useEffect(() => {
    setFilteredList(todoList)
    setActiveTab("All")
  }, [todoList])


  const handleSetTodos = (todos) => {
    setTodoList(todos)
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  return (
    <div className="todoapp">
      <AddForm todoList={todoList} handleSetTodos={handleSetTodos}/>
      <TodoList todoList={todoList} filteredList={filteredList} handleSetTodos={handleSetTodos} />
      <FilterBar
        todoList={todoList}
        handleSetTodos={handleSetTodos}
        setFilteredList={setFilteredList}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </div>
  );
};

export default TodoApp;