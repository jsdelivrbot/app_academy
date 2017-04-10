import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import { Link } from 'react-router-dom';

const linkToNewSessionForm = () => {
  return (
    <nav className="signin-signup">
      <Link to="/signin">Sign In</Link>
      <br/>
      <Link to="/signup">Sign Up</Link>
    </nav>
  );
};

const displayGreeting = (props) => (
  <div>
    <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
    <button className="header-button" onClick={props.signOut}>Sign Out</button>
  </div>
);

const Greeting  = (props) => {
  return (props.currentUser
    ? displayGreeting(props)
    : linkToNewSessionForm());
  };

const mapStateToProps = state => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { signOut: () => dispatch(signOut()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
