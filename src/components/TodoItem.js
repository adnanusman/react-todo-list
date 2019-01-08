import React from 'react';

function TodoItem() {
  return (
    <div className="todo-item">
      <input type="checkbox" id="checkbox" name="checkbox" />
      <label htmlFor="checkbox">Checkbox</label>
    </div>
  )
}

export default TodoItem;