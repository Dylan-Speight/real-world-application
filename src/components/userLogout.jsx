import React, { Component } from 'react';
import cookie from 'react-cookies';
import {Redirect} from 'react-router-dom';

export default class Logout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggingOut: true
        }
    }
    doLogout() {
        cookie.remove('token', {path: "/"})
        cookie.save('loggedIn', "false", {path: "/"})
        this.setState({isLoggingOut: false})
    }
    componentDidMount() {
        this.doLogout()
    }
    render() {
        if (this.state.isLoggingOut) {
            return <div/>
        }
        return <Redirect to={{pathname:"/", state: {loggedIn: false}}} />
    }
}

