import React, { Component } from 'react';

export default class Result extends Component {
  showResult = () => {
    return this.props.result.map((user, index) => (
      <tr>
        <th scope="row">{index}</th>
        <td>{user.userId}</td>
        <td>{user.preferredFullName}</td>
        <td>{user.region}</td>
        <td>{user.phoneNumber}</td>
        <td>{user.emailAddress}</td>
      </tr>
    ));
  };
  render() {
    return (
      <div>
        {this.props.result.length > 0 ? (
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">UserID</th>
                <th scope="col">Name</th>
                <th scope="col">Region</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>{this.showResult()}</tbody>
          </table>
        ) : (
          <span>No Data</span>
        )}
      </div>
    );
  }
}
