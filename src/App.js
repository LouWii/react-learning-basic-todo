import React from 'react';
import Todos from './Todos';
import TodoInput from './TodoInput';
import logo from './logo.svg';
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
    this.setState({todos: todos})
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
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <Todos todos={this.state.todos} />
          <TodoInput onTextChange={this.handleTodoInputChange} onAction={this.addTodo} />
        </div>
      </div>
    );
  }
}

export default App;
