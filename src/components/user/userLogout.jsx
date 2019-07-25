import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router-dom';
import LoggedInContext from './userContext'

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
    }
    componentDidMount() {
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
