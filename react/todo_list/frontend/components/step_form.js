import React, { Component } from 'react';

class StepForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      todo_id: null,
      title: '',
      body: '',
      done: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    // e.preventDefault();
    // let todo = Object.assign({}, this.state, { id: uniqueId() });
    // this.props.receiveTodo(todo);
    // this.setState({
    //   title: '',
    //   body: '',
    //   done: false,
    // });
  }

  handleChange(property){
    // return e => this.setState({ [property]: e.target.value });
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

export default StepForm;
