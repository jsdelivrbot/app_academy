import React from 'react';
import { connect } from 'react-redux';
import { signIn, signUp, signOut } from '../actions/session_actions';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
		e.preventDefault();
		this.props.processForm({user: this.state});
	}

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return (
			<div className="signin-form">
        <h3>{this.props.formType}</h3>
				<form onSubmit={this.handleSubmit} className="signin-form">
						<label> Username:
							<input type="text"
								value={this.state.username}
								onChange={this.update("username")}
								className="signin-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="signin-input" />
						</label>
						<br/>
						<input type="submit" value="Submit" />
				</form>
			</div>
		);
  }

}

const mapStateToProps = (state) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.session.errors
  };
};

const mapDispatchToProps = (dispatch, state) => {
  const formType = state.location.pathname.slice(1);
  const processForm = (formType === 'signIn') ? signIn : signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    formType: formType
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
