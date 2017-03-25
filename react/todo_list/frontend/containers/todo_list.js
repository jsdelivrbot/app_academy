import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../reducers/selectors';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';

class TodoList extends Component {
  render(){
    let todos = allTodos(this.props.state);
    return (
      <div>
        <ul>
          {todos.map( todo => this.renderTodo(todo))}
        </ul>
      </div>
    );
  }

  renderTodo(todo){
    return <li key={todo.id}>{todo.title}: {todo.body}</li>;
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
