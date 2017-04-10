import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/session_actions';
import { Link } from 'react-router';

const linkToNewSession = () => {
  return (
    <nav className="signin-signup">
      <p>asdfasdf</p>
    </nav>
  );
};

const displayGreeting = (props) => (
  <div>
    <h2 className="header-name">Hi, {props.currentUser.username}!</h2>
    <button className="header-button" onClick={signOut}>Sign Out</button>
  </div>
);

const Greeting  = (props) => {
  return (props.currentUser ? displayGreeting(props): linkToNewSession());
  };

const mapStateToProps = store => {
  return { currentUser: store.session.currentUser };
};

const mapDispatchToProps = dispatch => {
  return { signOut: () => dispatch(signOut()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
