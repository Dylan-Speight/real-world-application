import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import DomainPage from './domain/domainPage';
import UserLogin from './user/userLogin';
import authCheck from './authCheck';
import UserRegister from './user/userRegister';
import cookie from 'react-cookies';
import Logout from './user/userLogout'
import Header from './header'
import UserProfile from './user/userProfile'
import LoggedInContext, { checkCookie } from './user/userContext'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false, email: "", token: ""
    }
  }

  componentDidMount() {
    this.setState(checkCookie())
    console.log(this.state)
  }

  setLoggedInState = ((value)  => { this.setState(value); console.log(this.state)})
  render() {
    this.context = this.context
    return (
      <div className="App">
        <BrowserRouter>
        <LoggedInContext.Provider value={{
          isLoggedIn: this.state.isLoggedIn,
          token: this.state.token, 
          email: this.state.email, 
          setLoggedInState: this.setLoggedInState}}>

          <Header />
          <Route path="/domain/" component={authCheck(DomainPage, this.state.token)}/>
          <Route path="/login" component={UserLogin}/>
          <Route path="/register" component={UserRegister}/>
          <Route path="/logout" component={Logout} />
          <Route path="/profile" component={UserProfile} />
          </LoggedInContext.Provider>

        </BrowserRouter>

      </div>
    );
  }
}
App.contextType = LoggedInContext


