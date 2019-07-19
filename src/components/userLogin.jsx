import React, {Component} from 'react'

import cookie from 'react-cookies';
import { Link } from 'react-router-dom';
var jwtDecode = require('jwt-decode');


export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password: "",
            loggedIn: false
        }
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.client = this.client.bind(this)
    }
    
    handleChange(event) {
        console.log(event.target.value)

        const { value, name } = event.target;
        this.setState({[name]:value})
        console.log(this.state)
        
    }
    onSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(this.state))
        fetch('http://localhost:4000/api/authenticate', {
            method: 'POST',
            body: JSON.stringify({
                email:"test9@test.com",
                password: "password"
            }),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(async res => {
            const response = await res.json()
            cookie.save("token", await response.token, {path: "/"})
            if (res.status === 200) {
                this.setState({"loggedIn": true})
                cookie.save("loggedIn", "true", {path: "/"})

                this.props.history.push('/domain');
            } else {
                const error = new Error(res.error)    ;
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in please try again');
        });    
    }
    
    login (event) {
        console.log(event.target.name)
        
        alert("Logged" + this.state.email + this.state.password )
    }
    render(){
        return(
            <div>
                <p> Don't have an account?</p>
                <Link to="/register">Sign Up</Link>
                <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    name="email" 
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    // required
                    ></input>
                    <input name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    // required
                    ></input>
                    <input type="submit" value="Login"/>
                </form>
                </div>
            </div>
        )
    }
}