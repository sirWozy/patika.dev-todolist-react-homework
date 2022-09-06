import React, {useState} from 'react';
import {v4 as uuidv4} from "uuid";

const AddForm = ({todoList, handleSetTodos}) => {
  const [todo, setTodo] = useState('')

  const addTodoList = (e) => {
    if(todo !== '' && e.key === 'Enter'){
      e.preventDefault()
      handleSetTodos([...todoList, {
        id: uuidv4(),
        title: todo,
        completed: false
      }])
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <form>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus value={todo} onChange={(e) => setTodo(e.target.value)} onKeyDown={addTodoList}/>
      </form>
    </header>
  );
};

export default AddForm;