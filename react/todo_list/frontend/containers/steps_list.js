import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allSteps } from '../reducers/selectors';
import { receiveSteps, receiveStep, removeStep } from '../actions/step_actions';
import StepListItem from './step_list_item';
import StepForm from '../components/step_form';

class StepsList extends Component {

  render(){
    let steps = allSteps(this.props.state);
    return(
      <div className={ this.props.className }>

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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StepsList);
