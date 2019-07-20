import React, { Component, useContext } from 'react';
import {BrowserRouter, Route, Redirect, Loader, Link} from 'react-router-dom';
import Logout from './user/userLogout'
import cookie from 'react-cookies';
import LoggedInContext  from './user/userContext'


export default class Header extends Component{
    constructor(props) {
        super(props)
        // this.state = {  
    }    
    
    render(){
        this.context = this.context

        console.log(this.context)
        let loginButton = <LoggedInContext.Consumer>
        {({isLoggedIn, setLoggedInState}) => !isLoggedIn ? <Link to="/login/" onClick={() => setLoggedInState(false)}>Login</Link> : <Redirect to="/domain" />}
        </LoggedInContext.Consumer>
        let logoutButton = <LoggedInContext.Consumer>
        {({isLoggedIn, setLoggedInState}) => isLoggedIn ? <Link to="/logout/" onClick={() => setLoggedInState(false)}>Logout</Link> : <Redirect to="/" />}
        </LoggedInContext.Consumer>
        let activeLogButton
        let isLoggedIn = this.context.isLoggedIn
        console.log(this.context)
        console.log(this.context.isLoggedIn)
        console.log(isLoggedIn)
        if (!isLoggedIn) {
            activeLogButton = loginButton
        }
        else {
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
Header.contextType = LoggedInContext
