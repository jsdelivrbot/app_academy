import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allSteps } from '../reducers/selectors';
import { receiveSteps, receiveStep, removeStep } from '../actions/step_actions';
import StepListItem from './step_list_item';
import StepForm from '../components/step_form';

class StepsList extends Component {
  constructor(props){
    super(props);

    this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
  }

  toggleFormDisplay(e){
    let form = document.getElementById('step-form');
    if (form.classList.contains('hide')) {
     form.classList.remove('hide');
     e.target.innerHTML = 'hide form';
    } else {
      form.classList.add('hide');
      e.target.innerHTML = 'add note';
    }
  }

  render(){
    let steps = allSteps(this.props.state);
    return(
      <div className={ this.props.className }>

        <ul className='steps-list'>
          {steps.filter( step => {
            return step.todo_id === this.props.todoId;
          }).map( step => {
            return <StepListItem
              key={step.id}
              step={step}
              removeStep={ removeStep }/>;
          })}
        </ul>

        <p id='add-note-link' className='add-note-link' onClick={ this.toggleFormDisplay }>
          add note
        </p>

        <StepForm todoId={ this.props.todoId } receiveStep={ receiveStep }/>
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepsList);
