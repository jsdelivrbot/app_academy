import React, { Component } from 'react';

export default class ErrorList extends Component {
  render(){
    if (this.props.errors.length === 0) return null;

    return (
      <ul className="error-list">
        { this.props.errors.map(error => <li key={ error }>{ error }</li>) }
      </ul>
    );
  }
}
