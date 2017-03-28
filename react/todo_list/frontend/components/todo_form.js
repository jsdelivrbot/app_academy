import React, { Component } from 'react';
import { uniqueId } from '../util/id_generator';
import { connect } from 'react-redux';
import { receiveTodo } from '../actions/todo_actions';
import { bindActionCreators } from 'redux';

class TodoForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false,
      stepsHidden: true,
      stepFormHidden: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let todo = Object.assign({}, this.state, { id: uniqueId() });
    this.props.receiveTodo(todo);
    this.setState({
      title: '',
      body: '',
      done: false,
    });
  }

  handleChange(property){
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return(
      <form className='todo-form' onSubmit={this.handleSubmit}>
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
  return bindActionCreators({ receiveTodo }, dispatch);
}

export default connect(null, mapDispatchToProps)(TodoForm);
