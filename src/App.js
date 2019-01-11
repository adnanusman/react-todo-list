import React from 'react';
import todosData from './data/todosData';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    
    this.handleCheckBox = this.handleCheckBox.bind(this);

  };

  handleCheckBox(id) {
    this.setState(prevState => {
      prevState.todos.forEach(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
      })

      return {
        todo: prevState.todos
      }
    })
  }

  render() {
    const todoItemComponents = this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} todo={todo} handleCheckBox={this.handleCheckBox} />
      );
    });

    return (
      <div className="todo-list">
        {todoItemComponents}
      </div>
    );
  };
};

export default App;