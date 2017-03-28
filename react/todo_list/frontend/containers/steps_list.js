import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allSteps } from '../reducers/selectors';
import { receiveSteps, receiveStep, removeStep } from '../actions/step_actions';
import { receiveTodo } from '../actions/todo_actions';
import StepListItem from './step_list_item';
import StepForm from '../components/step_form';

class StepsList extends Component {
  constructor(props){
    super(props);

    this.toggleShowNotesLink = this.toggleShowNotesLink.bind(this);
    this.toggleFormLink = this.toggleFormLink.bind(this);

  }

  toggleShowNotesLink(e){
    let newTodo = Object.assign(
      {},
      this.props.todo,
      { stepsHidden: !this.props.todo.stepsHidden,
      stepFormHidden: true }
    );

    this.props.receiveTodo(newTodo);
  }

  toggleFormLink(e){
    let newTodo = Object.assign(
      {},
      this.props.todo,
      { stepFormHidden: !this.props.todo.stepFormHidden }
    );

    this.props.receiveTodo(newTodo);
  }

  render(){
    let steps = allSteps(this.props.state);
    return(
      <div className={ this.props.className }>

        <p
          className={`toggle-link`}
          onClick={ this.toggleShowNotesLink }>
          {this.props.todo.stepsHidden ? 'show notes': 'hide notes' }
        </p>

        <ul className={`steps-list${this.props.todo.stepsHidden ? ' hide': '' }`}>
          {steps.filter( step => {
            return step.todo_id === this.props.todo.id;
          }).map( step => {
            return <StepListItem
              key={step.id}
              step={step}
              removeStep={ removeStep }/>;
          })}
        </ul>

        <p
          className={`toggle-link${this.props.todo.stepsHidden ? ' hide': '' }`}
          onClick={ this.toggleFormLink }>
          {this.props.todo.stepFormHidden ? 'add note': "nvm, don't add note" }
        </p>


        <StepForm todo={ this.props.todo } receiveStep={ receiveStep }/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: allSteps(state),
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receiveStep: step => {
      dispatch(receiveStep(step));
    },
    receiveSteps: () => {
      dispatch(receiveSteps());
    },
    removeStep: () => {
      dispatch(removeStep());
    },
    receiveTodo: todo => {
      dispatch(receiveTodo(todo));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepsList);
