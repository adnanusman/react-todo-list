import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <input 
        type="checkbox" 
        id="checkbox" 
        name="checkbox" 
        defaultChecked={props.todo.completed === false && 'checked'} 
      />
      <label htmlFor="checkbox">{props.todo.text}</label>
    </div>
  )
}

export default TodoItem;