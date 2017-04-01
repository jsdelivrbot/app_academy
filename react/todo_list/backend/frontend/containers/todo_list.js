import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../reducers/selectors';
import {
  receiveTodos,
  removeTodo,
  fetchTodos,
  createTodo } from '../actions/todo_actions';
import TodoListItem from './todo_list_item';
import TodoForm from '../components/todo_form';

class TodoList extends Component {
  componentDidMount(){
    this.props.fetchTodos();
  }

  render(){
    let todos = allTodos(this.props.state);
    return (
      <div>
        <ul>
          {todos.map( todo => {
            return <TodoListItem key={todo.id} todo={todo} />;
          })}
        </ul>
        <TodoForm createTodo={ createTodo } removeTodo= { removeTodo } errors={ this.props.errors }/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: allTodos(state),
    errors: state.errors,
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createTodo: todo => dispatch(createTodo(todo)),
    receiveTodos: () => dispatch(receiveTodos()),
    removeTodo: () => dispatch(removeTodo()),
    fetchTodos: () => dispatch(fetchTodos())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
