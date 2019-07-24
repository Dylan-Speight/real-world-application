import React, { Component } from 'react';
import '../App.css';
import 'bulma'
import { Hero } from 'bloomer'
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import DomainPage from './domain/domainPage';
import UserLogin from './user/userLogin';
import authCheck from './authCheck';
import UserRegister from './user/userRegister';
import cookie from 'react-cookies';
import Logout from './user/userLogout'
import Header from './header'
import UserProfile from './user/userProfile'
import LoggedInContext from './user/userContext'
import checkCookie from './user/checkCookie'
import { HeroBody } from 'bloomer/lib/layout/Hero/HeroBody';



export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false, email: "", token: ""
    }
  }

  async componentDidMount() {
      const response = await checkCookie()
      this.setState(response)
  }

  setLoggedInState = ((value)  => {this.setState(value)})
  render() {
    this.context = this.context
  
    return (
      <Hero className='app'isFullHeight >
        <BrowserRouter>
        <LoggedInContext.Provider value={{
          isLoggedIn: this.state.isLoggedIn,
          token: this.state.token, 
          email: this.state.email, 
          setLoggedInState: this.setLoggedInState}}>
          <Header />
          <HeroBody>
          <Route path="/domain/" component={authCheck(DomainPage, this.state.token)}/>
          <Route path="/login/" component={UserLogin}/>
          <Route path="/register/" component={UserRegister}/>
          <Route path="/logout/" component={Logout} />
          <Route path="/profile/" component={authCheck(UserProfile, this.state.token)} />
          </HeroBody>
          </LoggedInContext.Provider>

        </BrowserRouter>

      </Hero>
    );
  }
}
App.contextType = LoggedInContext


