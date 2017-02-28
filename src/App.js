import React from 'react';
import Todos from './Todos';
import TodoInput from './TodoInput';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    let todos = [{text: "This is a todo", complete: true}, {text: "This is another todo", complete: false}]
    this.state = {todos: todos, todoText: ""}

    this.addTodo = this.addTodo.bind(this)
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this)
  }

  addTodo(text) {
    const todo = {text: this.state.todoText, complete: false}
    let todos = this.state.todos;
    todos.push(todo)
    this.setState({todos: todos, todoText: ""})
  }

  handleTodoInputChange(event) {
    // Generic way for handling input change events and saving them into state
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Learning React - Todo App</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <TodoInput onTextChange={this.handleTodoInputChange} onAction={this.addTodo} />
            </div>
            <div className="col-sm-8">
              <h4 className="todo-count">Currently {this.state.todos.length} todos in the list</h4>
              <Todos todos={this.state.todos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
