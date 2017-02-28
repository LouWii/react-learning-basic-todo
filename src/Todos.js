import React from 'react';
import Todo from './Todo';
import './Todos.css';

class Todos extends React.Component {

  render() {
    return (
      <div className="Todos">
        {this.props.todos.map((todo, idx) => <Todo key={idx} todo={todo} toggleTodo={this.props.toggleTodo.bind(this, idx)} />)}
      </div>
    );
  }
}

export default Todos;
