import React from 'react';
import './Todo.css';

class Todo extends React.Component  {

  render() {
    return (
      <li className={"Todo " + (this.props.todo.complete ? "completed" : "pending")}>
        <span className="box"><input type="checkbox" checked={this.props.todo.complete ? "true" : ""} onChange={this.props.toggleTodo} /></span>
        <span className="text">{this.props.todo.text}</span>
      </li>
    );
  }
}

export default Todo;
