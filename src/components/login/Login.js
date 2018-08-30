import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class Login extends Component {
  state = {
    email: '',
    password: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(userData);
    this.props.history.push('/portal');
  };

  render() {
    return (
      <div className="wrapper">
        <form onSubmit={this.onSubmit} className="form-signin">
          <h2 className="form-signin-heading">Login</h2>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.onChange}
          />
          <input
            type="password"
            className="form-control mt-2"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <input
            className="btn btn-outline-info btn-block mt-4"
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
