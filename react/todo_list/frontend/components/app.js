import React, { Component } from 'react';
import TodoList from '../containers/todo_list';

export default class App extends Component {
  render(){
    return (
      <div>
        <h1>todolist</h1>
        <TodoList />
      </div>
    );
  }
}
