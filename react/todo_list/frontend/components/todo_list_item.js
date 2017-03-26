import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { uniqueId } from '../util/id_generator';
import { receiveTodo, removeTodo } from '../actions/todo_actions';
import StepsList from '../containers/steps-list';

class TodoListItem extends Component {
  constructor(props){
    super(props);

    this.toggleDone = this.toggleDone.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  toggleDone(e){
    let updatedTodo = Object.assign(
      {}, this.props.todo,
      { done: !this.props.todo.done }
    );
    this.props.receiveTodo(updatedTodo);
  }

  deleteTodo(e){
    console.log('deleteTodo called');
    this.props.removeTodo(this.props.todo);
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

        <StepsList className={`steps-list${todo.done ? ' done' : ''}`} />

        <button className='delete-btn' onClick={ this.deleteTodo }>
          delete
        </button>
      </li>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ receiveTodo, removeTodo }, dispatch);
};

export default connect(null, mapDispatchToProps)(TodoListItem);
