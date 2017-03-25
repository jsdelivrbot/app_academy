import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allTodos } from '../reducers/selectors';
import { receiveTodos, receiveTodo } from '../actions/todo_actions';
import TodoListItem from '../components/todo_list_item';

class TodoList extends Component {
  renderTodo(todo){
    return <li key={todo.id}>{todo.title}: {todo.body}</li>;
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
