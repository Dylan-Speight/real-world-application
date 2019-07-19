import React, { Component, useContext } from 'react';
import {BrowserRouter, Route, Redirect, Loader, Link} from 'react-router-dom';
// import UserContext from './userContext'

import Logout from './userLogout'
import cookie from 'react-cookies';

export default class Header extends Component{
    constructor(props) {
        super(props)
        this.state = {  
          loggedIn: this.props.loggedIn
        }
    }    
    
    render(){
        
        let loginButton = <Link to="/login">Log In</Link>;
        let logoutButton = <Link to="/logout">Log Out</Link>;
        let activeLogButton
        let loggedIn = this.state.loggedIn
        if (loggedIn === "false") {
            activeLogButton = loginButton
        }
        if (loggedIn === "true") {
            activeLogButton = logoutButton
        }
    return(
        <header className="App-header">
          <Link to="/">Home Page</Link>
          <Link to="/domain/">API Testing</Link>
          {activeLogButton}
        </header>
    );
    } 
    }

