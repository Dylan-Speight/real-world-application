import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DomainPage from './domainPage';
import UserLogin from './userLogin';
import withAuth from './withAuth';
import UserRegister from './userRegister';
import cookie from 'react-cookies';
import Logout from './userLogout'
import Header from './header'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: cookie.load('loggedIn')
    }
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header loggedIn={this.state.loggedIn} />
          <Route path="/domain/" component={withAuth(DomainPage)}/>
          <Route path="/login" component={UserLogin}/>
          <Route path="/register" component={UserRegister}/>
          <Route path="/logout" component={Logout} />
        </BrowserRouter>
      </div>
    );
  }
}