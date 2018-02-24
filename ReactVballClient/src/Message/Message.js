import React, { Component } from 'react';
import { Messages, Text} from './Messages'
import { Input, Label } from 'reactstrap';


class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partner: false,
    }
    this.partner = this.partner.bind(this);
  }

  partner(e){
    
    console.log("e.target", e.target.value)
    console.log("partner:", this.state.partner)
    if (e.target.value==="I need a partner"){
      this.setState({partner: true});
    }else{
      this.setState({partner: false});
    }
  }

  render() {
    return (

        <div className="main">
          <div className="mainDiv">
            <h1 className="text-center">Post A Message</h1><hr/>
            <div className="dropdown label">
            <Label className="" for="messageTypeDrop"><h2>Choose a message type:</h2></Label>
            <Input  type="select" name="select" onChange={this.partner} id="messageTypeDrop">
              <option>Leave a comment</option>
              <option>I need a partner </option>
            </Input>
            </div>
            {this.state.partner ? <Messages />: <Text />}
          </div>
          <div className="container recentPosts text-center">
            <h2>Your Recent Posts</h2>
          </div>
        </div>

    );
  }
};

export default Message;