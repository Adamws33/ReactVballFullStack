import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';


export class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: " ",
      type: "partner",
      comment: " ",
      partner: " ",
      division: " "
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log("handle event ", event)
    this.setState({
        [event.target.name]: event.target.value,
    });
}

  handleSubmit(e) {
    console.log("data to be posted before post",this.state)
    fetch("http://localhost:3000/api/message",{
              method: "POST",
              body: JSON.stringify({message: this.state}),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(
            (response) => response.json(),
            document.getElementById("formMessages").reset(),
            (res)=>{
            console.log("After Post messages",res)
            
            });
            e.preventDefault()
        }

  render() {
    
    return (

        <div className="dropdown">
          <form id="formMessages" onSubmit={this.handleSubmit} >
            <div className="who ">
              <Label for="maleFemale"><h3>Please select who you will need:</h3></Label>
              <Input className="input" type="select" placeholder="Male or Female?" name="partner" id="maleFemale" onChange={this.handleChange}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </Input>
            </div>
            <div className="division ">
              <Label className="labelDiv" for="intComp"><h3>Please select the desired division:</h3></Label>
              <Input className="input " type="select" placeholder="Int or Comp?" name="division" id="intComp" onChange={this.handleChange}>
                <option></option>
                <option>Intermediate</option>
                <option>Competitive</option>
              </Input>
            </div>
            <button type="submit" className="partnerButton float-right btn btn-success" onClick={this.handleSubmit}>Submit</button>
          </form>
        </div>

    );
  }
};

export class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: " ",
      type: "comment",
      comment: " ",
      partner: " ",
      division: " "
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

  handleSubmit(e) {
    console.log("data to be posted before post",this.state)
    fetch("http://localhost:3000/api/message",{
              method: "POST",
              body: JSON.stringify({message: this.state}),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(
            (response) => response.json(),
            document.getElementById("formText").reset(),
            (res)=>{
            console.log("After Post text",res)
            
            });
            e.preventDefault()
        }

  render() {
    return (

        <div className="dropdown">
          <form id="formText" onSubmit={this.handleSubmit} >
            <input className="commentText" name="comment" placeholder="   Enter Text Here" onChange={this.handleChange}></input>
            <button type="submit"  className="messageButton float-right btn btn-success">Submit</button>
          </form>
        </div>

    );
  }
};