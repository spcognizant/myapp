import React, { Component } from 'react';

class Sidebar extends Component {
  state = {
    businessname: '',
    employeename: ''
  };
  enableClear = true;
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const userData = {
      businessname: this.state.businessname,
      employeename: this.state.employeename
    };

    this.props.onClick(userData);
    this.enableClear = false;
  };

  onClear = e => {
    e.preventDefault();
    this.props.onClick();
    this.enableClear = true;
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form-group">
          <input
            type="text"
            className="form-control"
            name="businessname"
            placeholder="Business Name"
            value={this.state.businessname}
            onChange={this.onChange}
          />
          <input
            type="text"
            className="form-control mt-2"
            name="employeename"
            placeholder="Employee Name"
            value={this.state.employeename}
            onChange={this.onChange}
          />
        </form>
        <input
          className="btn btn-outline-info btn-block mt-4"
          type="submit"
          onClick={this.onSubmit}
        />
        <button
          className="btn btn-outline-warning btn-block mt-4"
          type="button"
          onClick={this.onClear}
          hidden={this.enableClear}
          disabled={this.enableClear}
        >
          Clear
        </button>
      </div>
    );
  }
}
export default Sidebar;
