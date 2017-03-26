import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniqueId } from '../util/id_generator';
import { receiveTodo } from '../actions/todo_actions';

class TodoListItem extends Component {
  constructor(props){
    super(props);

    this.toggleDone = this.toggleDone.bind(this);
  }

  toggleDone(e){
    console.log('toggling:');
    console.log(this.props.todo);
    e.preventDefault();
    let updatedTodo = Object.assign(
      {}, this.props.todo,
      { done: !this.props.todo.done }
    );
    console.log('new todo:');
    console.log(updatedTodo);
    this.props.receiveTodo(updatedTodo);
  }

  render(){
    let todo = this.props.todo;
    return (
      <li className='todo-list-item'>

        <h3
          className={`todo-list-item-title${todo.done ? ' done' : ''}`}
          onClick={this.toggleDone}>
          {this.props.todo.title}
        </h3>

        <p
          className={`todo-list-item-body${todo.done ? ' done' : ''}`}>
          {todo.body}
        </p>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ receiveTodo }, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoListItem);
