import React, { Component } from 'react';
import { allSteps } from '../reducers/selectors';

export default class StepListItem extends Component {
  render(){
    let step = this.props.step;
    return (
      <li className='step-list-item'>

        <h3
          className={`step-list-item-title${step.done ? ' done' : ''}`}>
          {step.title}
        </h3>

        <p
          className={`step-list-item-body${step.done ? ' done' : ''}`}>
          {step.body}
        </p>
      </li>
    );
  }
}
