import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';

class Greeting extends React.Component {

  render() {
    console.log('inside greeting');
    console.log(this.props);
    return (
      <div>greeting</div>
    );
  }

}

const mapStateToProps = store => {
  return { currentUser: store.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { signOut: () => dispatch(signOut()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
