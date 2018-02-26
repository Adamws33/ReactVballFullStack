import React, { Component } from 'react';
// import axios from 'axios';

export class HistoryPartner extends Component {
  constructor(props) {
    super(props);
    this.messagePartner = this.messagePartner.bind(this)
  }

  messagePartner(e) {
    console.log("props in history2", this.props)
    var posts = this.props.array;
    console.log("posts", posts)
    if (posts.length<2){
      return null
    }
    posts.map((post, id) => {
      console.log("hey")
      return(

        <li key={id}> Needing a: {post.partner} for division: {posts.division}
        <button id={post.id}><strong>Update</strong></button>
        <button id={post.id}><strong>X</strong></button> */
      </li>
    )
    })
  }

  render() {
    if (this.props.array <2) return null
    var partner = this.props.array.map((post, id) => {
      <li key={id}> Needing a: {post.partner} for division: {post.division}
      <button id={post.id}><strong>Update</strong></button>
      <button id={post.id}><strong>X</strong></button> 
    </li>
        
    })
    return (
      <div>
        <ul>
        {this.props.array.map((post, id) => {
          return (
      <li key={id}> Needing a: {post.partner} for division: {post.division}
      <button id={post.id}><strong>Update</strong></button>
      <button id={post.id}><strong>X</strong></button> 
    </li>)
        
    })}
        </ul>
      </div>
    );
  }
}
export class HistoryComment extends Component {
  constructor(props) {
    super(props);
    this.messageComment = this.messageComment.bind(this)
  }

  messageComment(e) {
    var posts = this.props.comment;
    var len = posts.length;
    console.log("len", len)
    var lis = "";
    for (var i = 0; i < len; i++) {
      lis += "<li'>" + "Comment: " + posts[i].comment + "<div class='pull-right'>" +
        "<button id='" + posts[i].id + "' class='update'><strong>Update</strong></button>" +
        "<button id='" + posts[i].id + "' class='remove'><strong>X</strong></button>" +
        "</div></li>"
    }
  }
  render() {
    return (

      <div>
        <ul>
          {this.messageComment()}
        </ul>
      </div>
    )
  }
}