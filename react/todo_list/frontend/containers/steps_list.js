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
    this.toggleListDisplay = this.toggleListDisplay.bind(this);
    this.linkInnerHTML = this.linkInnerHTML.bind(this);
  }

  toggleListDisplay(e){
    let list = document.getElementById('steps-list');
    let addNoteLink = document.getElementById('add-note-link');
    let form = document.getElementById('step-form');

    //show all notes, show add-note-link
    if (list.classList.contains('hide')) {
      list.classList.remove('hide');
      addNoteLink.classList.remove('hide');
      e.target.innerHTML = 'hide notes';

    //close all notes, close note link, close note form
    } else {
      list.classList.add('hide');
      addNoteLink.classList.add('hide');
      if (!form.classList.contains('hide')) form.classList.add('hide');
      e.target.innerHTML = 'see notes';
    }

    this.adjustAddNoteLinkDisplay();
    
  }

  toggleFormDisplay(e){

    let form = document.getElementById('step-form');

    form.classList.contains('hide')
    ? form.classList.remove('hide')
    : form.classList.add('hide');

    this.adjustAddNoteLinkDisplay();
  }

  adjustAddNoteLinkDisplay(){
    let addNoteLink = document.getElementById('add-note-link');
    let form = document.getElementById('step-form');
    let newInnerHTML = form.classList.contains('hide')
      ? 'add note'
      : 'hide form';

    addNoteLink.innerHTML = newInnerHTML;
  }

  linkInnerHTML(){
    let form = document.getElementById('step-form');
    console.log('hit the addnotelinkinnerhtml fxn');
    return form.classList.contains('hide') ? 'add note' : 'nvm' ;
  }

  render(){
    let steps = allSteps(this.props.state);
    return(
      <div className={ this.props.className }>

        <p className='toggle-link' onClick={ this.toggleListDisplay }>
          see notes
        </p>

        <ul id='steps-list' className='steps-list hide'>
          {steps.filter( step => {
            return step.todo_id === this.props.todoId;
          }).map( step => {
            return <StepListItem
              key={step.id}
              step={step}
              removeStep={ removeStep }/>;
          })}
          <p
            id='add-note-link'
            className='toggle-link'
            onClick={ this.toggleFormDisplay }>
            add note
          </p>
        </ul>


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
