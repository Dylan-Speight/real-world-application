import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Redirect, Link} from 'react-router-dom';
import LoggedInContext, { LoggedInProvider, LoggedInConsumer } from './userContext'

export default class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggingOut: true
        }
    }
    
    doLogout() {
        cookie.remove('token', {path: "/"})
        cookie.save('isLoggedIn', "false", {path: "/"})
        this.setState({isLoggingOut: false})
        console.log(this.state.isLoggingOut)
    }
    componentDidMount() {
        this.doLogout()
    }
    render() {
        if (this.state.isLoggingOut) {
            return <div/>
        }
        return(
            <Redirect to="/" /> 
        )
    }
}

