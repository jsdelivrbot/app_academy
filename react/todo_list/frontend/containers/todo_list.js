import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../reducers/selectors';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';

class TodoList extends Component {
  render(){
    return (
      <div>
        <p>hello from containers/todo_list</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveTodo: todo => {
      dispatch(receiveTodo(todo));
    },
    receiveTodos: () => {
      dispatch(receiveTodos());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
