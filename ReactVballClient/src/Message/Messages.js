import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';


export class Messages extends Component {

  render() {
    return (

        <div className="dropdown">
          <div className="who ">
            <Label for="maleFemale"><h3>Please select who you will need:</h3></Label>
            <Input className="input " type="select" name="select" id="maleFemale">
              <option>Male</option>
              <option>Female</option>
            </Input>
          </div>
          <div className="division ">
            <Label className="labelDiv" for="intComp"><h3>Please select the desired division:</h3></Label>
            <Input className="input " type="select" name="select" id="intComp">
              <option>Intermediate</option>
              <option>Competitive</option>
            </Input>
          </div>
          <button type="submit" className="partnerButton float-right btn btn-success">Submit</button>
        </div>

    );
  }
};

export class Text extends Component {

  render() {
    return (

        <div className="dropdown">
            <input className="commentText" placeholder="   Enter Text Here"></input>
            <button type="submit" className="messageButton float-right btn btn-success">Submit</button>
        </div>

    );
  }
};