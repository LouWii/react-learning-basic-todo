import React from 'react';
import './Todo.css';

class Todo extends React.Component  {

  render() {
    return (
      <div className={"Todo " + (this.props.todo.complete ? "completed" : "pending")}>
        <div className="checkbox">
          <input type="checkbox" checked={this.props.todo.complete ? "true" : ""} />
        </div>
        <h3>{this.props.todo.text}</h3>
      </div>
    );
  }
}

export default Todo;
