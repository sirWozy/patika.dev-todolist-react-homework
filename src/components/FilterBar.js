import React from 'react';

const FilterBar = ({todoList, handleSetTodos, setFilteredList, activeTab, setActiveTab}) => {

  const uncomletedTodos = todoList.filter((todo) => {
    return todo.completed !== true
  })

  const isItCompleted = todoList.some((todo) => {
    return todo.completed === true
  })

  const handleClearCompleted = () => {
    let activeTodo = todoList.filter((todo) => {
      return todo.completed !== true
    })
    handleSetTodos(activeTodo)
  }
  const handleFilteredList = (filter) => {
    switch(filter) {
      case "Active":
        let activeList = todoList.filter((todo) => {
          return todo.completed !== true
        })
        setFilteredList(activeList)
        setActiveTab("Active")
        break;
      case "Completed":
        let completedList = todoList.filter((todo) => {
          return todo.completed === true
        })
        setFilteredList(completedList)
        setActiveTab("Completed")
        break;
      default:
        setFilteredList(todoList)
        setActiveTab("All")
    }
  }

  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{uncomletedTodos.length} </strong> items left
		</span>

      <ul className="filters">
        <li>
          <a href="#/" className={activeTab === "All" ? "selected" : ""} onClick={() => handleFilteredList("All")}>All</a>
        </li>
        <li>
          <a href="#/" className={activeTab === "Active" ? "selected" : ""} onClick={() => handleFilteredList("Active")}>Active</a>
        </li>
        <li>
          <a href="#/" className={activeTab === "Completed" ? "selected" : ""} onClick={() => handleFilteredList("Completed")}>Completed</a>
        </li>
      </ul>
      {isItCompleted &&
        <button className="clear-completed" onClick={handleClearCompleted}>
          Clear completed
        </button>
      }
    </footer>
  );
};

export default FilterBar;