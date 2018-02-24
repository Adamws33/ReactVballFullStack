import React, { Component } from 'react';

class Register extends Component {
   
  render() {
    return (

        <div className="register">
            <h1>Register Here</h1>
            <input placeholder="Captian Name" className="regCap"></input>
            <input placeholder="Partner Name" className="regPartner"></input>
            <input placeholder="Phone Number" className="regPhone"></input>
            <input placeholder="Email" className="regEmail"></input>
            <input placeholder="Division A/B" className="regDiv"></input>
            <button className="subRegister">Submit</button>
        </div>

    );
  }
};

export default Register;