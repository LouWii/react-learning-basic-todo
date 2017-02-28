import React from 'react';
import './TodoInput.css';

class TodoInput extends React.Component  {

  render() {
    return (
      <div className="TodoInput">
        <h2>Add a todo</h2>
        <div className="input-group">
          <input type="text" className="form-control" name="todoText" placeholder="I need to..." onChange={this.props.onTextChange} value={this.props.newTodoText} />
          <span className="input-group-btn">
            <button className="btn btn-primary" type="button" onClick={this.props.onAction}>Go!</button>
          </span>
        </div>
      </div>
    );
  }
}

export default TodoInput;
