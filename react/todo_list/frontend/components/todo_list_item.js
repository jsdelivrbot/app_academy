import React, { Component } from 'react';

export default class TodoListItem extends Component {
  render(){
    return (
      <li className='todo-list-item'>
        <h3>{this.props.todo.title}</h3>
        <p>{this.props.todo.body}</p>
      </li>
    );
  }
}
