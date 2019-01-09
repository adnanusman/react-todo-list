import React from 'react';
import todosData from './data/todosData';
import TodoItem from './components/TodoItem';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    }
    
  };

  render() {
    const todoItemComponents = this.state.todos.map(todo => {
      return (
        <TodoItem key={todo.id} todo={todo} />
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