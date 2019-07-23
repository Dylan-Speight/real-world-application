import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Redirect, Link} from 'react-router-dom';
import LoggedInContext, { LoggedInProvider, LoggedInConsumer } from './userContext'

export default class UserLogout extends Component {
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
        this.context.setLoggedInState({isLoggedIn: false, email: "", token: ""})
        console.log(this.state.isLoggingOut)
    }
    componentDidMount() {
        console.log(this.context)

        this.doLogout()
    }
    render() {
        this.context = this.context

        if (this.state.isLoggingOut) {
            return <div/>
        }
        return(
            <Redirect to="/" /> 
        )
    }
}

UserLogout.contextType = LoggedInContext
