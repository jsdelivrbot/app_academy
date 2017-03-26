import React, { Component } from 'react';
import { connect } from 'react-redux';
import { allSteps } from '../reducers/selectors';
import { receiveSteps, receiveStep, removeStep } from '../actions/todo_actions';
import StepListItem from '../components/step_list_item';

export default class StepsList extends Component {
  render(){
    return(
      <div className={ this.props.className }>
        <ul className='steps-list'>
          <StepListItem />
        </ul>
      </div>
    );
  }
}
