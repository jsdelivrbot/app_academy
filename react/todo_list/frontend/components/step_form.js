import React, { Component } from 'react';
import { connect } from 'react-redux';
import { receiveStep } from '../actions/step_actions';
import { bindActionCreators } from 'redux';
import { uniqueId } from '../util/id_generator';

class StepForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      title: '',
      body: '',
      done: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let step = Object.assign(
      {},
      this.state,
      { todo_id: this.props.todoId, id: uniqueId() }
    );
      console.log(this.props);
      console.log(this.state);
      console.log(step);
      console.log(window.store.getState());
    this.props.receiveStep(step);
      console.log(window.store.getState());
    this.state = {
      title: '',
      body: '',
      done: false,
    };
  }

  handleChange(property){
    return e => this.setState({ [property]: e.target.value });
  }

  render(){
    return (
        <form className='step-form' onSubmit={this.handleSubmit}>
          <label>Title
            <input
              type='text'
              placeholder='add new step'
              value={ this.state.title }
              onChange={ this.handleChange('title') }
              />
          </label>
          <br />
          <label>body
            <textarea
              placeholder='describe todo'
              value={ this.state.body }
              onChange={ this.handleChange('body') }
              />
          </label>
          <br />
          <button className='submit-btn' type='submit'>submit</button>
        </form>
    );

    // return(
    //   <form className='todo-form' onSubmit={this.handleSubmit}>
    //     <label>Title
    //       <input
    //         type='text'
    //         placeholder='add new todo'
    //         value={ this.state.title }
    //         onChange={ this.handleChange('title') }
    //         />
    //     </label>
    //     <br />
    //     <label>body
    //       <textarea
    //         placeholder='describe todo'
    //         value={ this.state.body }
    //         onChange={ this.handleChange('body') }
    //         />
    //     </label>
    //     <br />
    //     <button className='submit-btn' type='submit'>submit</button>
    //   </form>
    // );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ receiveStep }, dispatch);
};

export default connect(null, mapDispatchToProps)(StepForm);
