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
import LoggedInContext, { checkCookie } from './user/userContext'



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false 
    }
  }

  componentDidMount() {
    this.setState(checkCookie())
  }

  setLoggedInState = ((value)  => { this.setState({ isLoggedIn: value}); console.log(this.state)})
  
  render() {
    this.context = this.context
    return (
      <div className="App">
        <LoggedInContext.Provider value={{isLoggedIn: this.state.isLoggedIn, setLoggedInState: this.setLoggedInState}}>
        <BrowserRouter>
        <Header />
          <Route path="/domain/" component={authCheck(DomainPage)}/>
          <Route path="/login" component={UserLogin}/>
          <Route path="/register" component={UserRegister}/>
          <Route path="/logout" component={Logout} />
        </BrowserRouter>
      </LoggedInContext.Provider>
      </div>
    );
  }
}
App.contextType = LoggedInContext


