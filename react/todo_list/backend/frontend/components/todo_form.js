import React, { Component } from 'react';
import { uniqueId } from '../util/id_generator';
import { connect } from 'react-redux';
import { createTodo } from '../actions/todo_actions';
import { bindActionCreators } from 'redux';
import ErrorList from './error_list';

class TodoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.createTodo(todo).then(
      this.setState({ title: '', body: '' })
    );
  }

  handleChange(property){
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return(
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <ErrorList errors={ this.props.errors } />
        <label>add todo
          <input
            type='text'
            placeholder='organize surprise party for Jessica'
            value={ this.state.title }
            onChange={ this.handleChange('title') }
            />
        </label>
        <br />
        <label>details
          <textarea
            placeholder='April 4th, 2017, 8pm'
            value={ this.state.body }
            onChange={ this.handleChange('body') }
            />
        </label>
        <br />
        <button className='submit-btn' type='submit'>create todo</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoForm);
