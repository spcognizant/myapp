import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Result from './result/Result';
const employeeData = [
  {
    userId: 'rirani',
    jobTitleName: 'Developer',
    firstName: 'Romin',
    lastName: 'Irani',
    preferredFullName: 'Romin Irani',
    employeeCode: 'E1',
    region: 'CA',
    phoneNumber: '408-1234567',
    emailAddress: 'romin.k.irani@gmail.com'
  },
  {
    userId: 'nirani',
    jobTitleName: 'Developer',
    firstName: 'Neil',
    lastName: 'Irani',
    preferredFullName: 'Neil Irani',
    employeeCode: 'E2',
    region: 'CA',
    phoneNumber: '408-1111111',
    emailAddress: 'neilrirani@gmail.com'
  },
  {
    userId: 'thanks',
    jobTitleName: 'Program Directory',
    firstName: 'Tom',
    lastName: 'Hanks',
    preferredFullName: 'Tom Hanks',
    employeeCode: 'E3',
    region: 'CA',
    phoneNumber: '408-2222222',
    emailAddress: 'tomhanks@gmail.com'
  }
];

class Portal extends Component {
  state = {
    data: []
  };

  onClick = userData => {
    if (!userData) {
      this.setState({
        data: []
      });
    } else {
      this.setState({
        data: employeeData
      });
    }
  };

  render() {
    return (
      <div className="row mt-2">
        <div className="col-2">
          <Sidebar onClick={this.onClick} />
        </div>
        <div className="col-10">
          <Result result={this.state.data} />
        </div>
      </div>
    );
  }
}

export default withRouter(Portal);
