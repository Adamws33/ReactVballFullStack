import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import { HistoryComment, HistoryPartner} from "./History"

export class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: window.localStorage.getItem("userId"),
      type: "partner",
      comment: " ",
      partner: " ",
      division: " ",
      messages: " ", 
      comment: " ", 
      partners: " ", 
      array: " "
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGet = this.handleGet.bind(this);
  }
  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
    });
}
handleGet(e){
  fetch("http://localhost:3000/api/message",{
    method: "GET",
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    })
  }).then((res) => res.json())
  .then((data) => {
        this.setState({messages: data, })
        if (this.state.messages.type === "comment"){
          this.setState({comment: this.state.messages})
        }else{
          this.setState({partners: this.state.messages})
          this.setState({array:this.state.messages})
        }
        document.getElementById("formMessages").reset()
        // console.log("response from get",data)
      })
          
  }
  handleSubmit(e) {
    e.preventDefault()
    console.log("data to be posted before post",this.state)
    fetch("http://localhost:3000/api/message",{
              method: "POST",
              body: JSON.stringify({message: this.state}),
              headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
              })
            }).then(
            (response) => response.json(),
            document.getElementById("formMessages").reset(),
            (res)=>{
            console.log("After Post messages",res)
          })
          
          this.handleGet()
      }
  render() {
    return (

        <div className="dropdown">
          <form id="formMessages" onSubmit={this.handleSubmit}>
            <div className="who ">
              <Label for="maleFemale"><h3>Please select who you will need:</h3></Label>
              <Input className="input" type="select" placeholder="Male or Female?" name="partner" id="maleFemale" onChange={this.handleChange}>
                <option disabled selected>M/F</option>
                <option>Male</option>
                <option>Female</option>
              </Input>
            </div>
            <div className="division">
              <Label className="labelDiv" for="intComp"><h3>Please select the desired division:</h3></Label>
              <Input className="input " type="select" placeholder="Int or Comp?" name="division" id="intComp" onChange={this.handleChange}>
                <option disabled selected>Division?</option>
                <option>Intermediate</option>
                <option>Competitive</option>
              </Input>
            </div>
            <button type="submit" className="partnerButton float-right btn btn-success" >Submit</button>
          </form>
          <div className="container recentPosts text-center">
            <h2>Your Recent Posts</h2>
              <HistoryPartner array={this.state.array} />
          </div>
        </div>

    );
  }
};

export class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      owner: window.localStorage.getItem("userId"),
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