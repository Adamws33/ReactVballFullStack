import React, { Component } from 'react';
import Auth from './auth/Auth';
import SiteBar from './Navbar/Navbar';
import Splash from './home/Splash';
import SideBar from './Sidebar/SideBar';
import Home from './home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '',
      loggedIn: false
    }

    this.setSessionState = this.setSessionState.bind(this);
    this.protectedViews = this.protectedViews.bind(this);
    this.logout = this.logout.bind(this);
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token, loggedIn: true});

  }

  componentWillMount() {
    const token = localStorage.getItem('token')

    if (token && !this.state.sessionToken) {
      this.setState({ sessionToken: token, loggedIn: true });
    }
  }

  logout(){
    this.setState({ sessionToken: '', loggedIn: false });
    localStorage.removeItem('token');
    console.log(this.state.sessionToken)
  }

  protectedViews() {

    if (this.state.sessionToken === localStorage.getItem('token')) {
      return (
        <Route path='/' exact={true}>
          <Home sessionToken={this.state.sessionToken} />
        </Route>
      )
    } else {
      return (
        <Route path="/auth" exact={true} >
          <Auth setToken={this.setSessionState} />
        </Route>
      )
    }

  }

  render() {
    return (
      <Router>
        <div>
          <SiteBar clickLogout={this.logout} loggedIn={this.state.loggedIn} />{this.state.loggedIn ? <SideBar  /> : null}          
          {/* <SiteBar clickLogout={this.logout} loggedIn={this.state.sessionToken} /> */}

          {this.protectedViews()}
        </div>
      </Router>

    );
  }
}

export default App;
