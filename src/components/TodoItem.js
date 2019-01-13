import React from 'react';

class TodoItem extends React.Component {
  render() {
    const checkedTodo = {
      textDecoration: 'line-through',
      fontStyle: 'italic'
    }
    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          id="checkbox" 
          name="checkbox" 
          defaultChecked={this.props.todo.completed && 'checked'} 
          onChange={() => this.props.handleCheckBox(this.props.todo.id)}
        />
        <label 
          htmlFor="checkbox"
          style={this.props.todo.completed ? checkedTodo : null}
        >{this.props.todo.text}</label>
      </div>
    )
  }
}

export default TodoItem;