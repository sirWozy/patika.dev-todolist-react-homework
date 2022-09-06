import React from 'react';

const TodoList = ({todoList, filteredList, handleSetTodos}) => {

  const handlerDeleteTodo = (id) => {
    const newTodoList = todoList.filter(e => {
      return e.id !== id
    })
    handleSetTodos(newTodoList)
  }

  const toggleAllCompleted = () => {
    if(todoList.some((todo) => todo.completed === false)){
      let newtodo = todoList.map((todo) => {
        return {
          ...todo,
          completed: true
        }
      })
      handleSetTodos(newtodo)
    }else{
      let newtodo = todoList.map((todo) => {
        return {
          ...todo,
          completed: false
        }
      })
      handleSetTodos(newtodo)
    }
  }

  const isCompleted = (e) => {
    let newTodo = todoList.map((todo) => {
      if(todo.id === e.target.id){
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    handleSetTodos(newTodo)
  }

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={toggleAllCompleted}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {filteredList.map((el, index)=>(
          <li key={el.id} className={el.completed ? "completed" : ""}>
            <div className="view">
              <input className="toggle" type="checkbox" checked={el.completed} defaultChecked={el.completed} id={el.id} onChange={isCompleted} />
              <label>{el.title}</label>
              <button className="destroy" onClick={() => handlerDeleteTodo(el.id)}></button>
            </div>
          </li>
        ))}

      </ul>
    </section>
  );
};

export default TodoList;