import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../reducers/selectors';
import { receiveTodos, receiveTodo, removeTodo } from '../actions/todo_actions';
import TodoListItem from '../components/todo_list_item';
import TodoForm from '../components/todo_form';

class TodoList extends Component {
  render(){
    let todos = allTodos(this.props.state);
    return (
      <div>
        <ul>
          {todos.map( todo => {
            return <TodoListItem key={todo.id} todo={todo} />;
          })}
        </ul>
        <TodoForm receiveTodo={ receiveTodo } removeTodo= { removeTodo }/>
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
    },
    removeTodo: () => {
      dispatch(removeTodo());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
