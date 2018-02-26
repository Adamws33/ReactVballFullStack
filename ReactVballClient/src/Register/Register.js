import React, { Component } from 'react';
const currentdate = new Date();


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: " ",
      captain: " ",
      partner: " ",
      phone: " ",
      email: " ",
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
    fetch("http://localhost:3000/api/register",{
              method: "POST",
              body: JSON.stringify({register: this.state}),
              headers: new Headers({
                'Content-Type': 'application/json'
              })
            }).then(
            (response) => response.json(),
            document.getElementById("formRegister").reset(),
            (res)=>{
            console.log("After Post Register",res)
            
            });
            e.preventDefault()
        }
   
  render() {
    return (

        <div className="register">
          <form id="formRegister">
            <h1>Register Here</h1>
            <input placeholder="Captian Name" name="captain" type="text" onChange={this.handleChange}/>
            <input placeholder="Partner Name" name="partner" type="text" onChange={this.handleChange}/>
            <input placeholder="Phone Number" name="phone" type="text" onChange={this.handleChange}/>
            <input placeholder="Email" name="email" type="email" onChange={this.handleChange}/>
            <input placeholder="Division A/B" name="division" type="text" onChange={this.handleChange}/>
            <input placeholder="Date" name="date" type="text" onChange={this.handleChange}/>
            <input type="submit" id="subRegister" onClick={this.handleSubmit} value="Submit"/>
          </form>
        </div>

    );
  }
};

export default Register;