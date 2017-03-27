import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allSteps } from '../reducers/selectors';
import { receiveSteps, receiveStep, removeStep } from '../actions/step_actions';
import StepListItem from './step_list_item';
import StepForm from '../components/step_form';

export default class StepsList extends Component {
  render(){
    let steps = allSteps(window.store.getState());//FIX THIS!!!!!!!
    return(
      <div className={ this.props.className }>

        <ul className='steps-list'>
          {steps.filter( step => {
            return step.todo_id === this.props.todoId;
          }).map( step => {
            return <StepListItem key={step.id} step={step} />;
          })}
        </ul>

        <StepForm todoId={ this.props.todoId } receiveStep={ receiveStep } removeStep= { removeStep } />
      </div>
    );
  }
}
