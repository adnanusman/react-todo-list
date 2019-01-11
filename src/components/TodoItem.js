import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          id="checkbox" 
          name="checkbox" 
          defaultChecked={this.props.todo.completed === false && 'checked'} 
          onChange={() => this.props.handleCheckBox(this.props.todo.id)}
        />
        <label htmlFor="checkbox">{this.props.todo.text}</label>
      </div>
    )
  }
}

export default TodoItem;