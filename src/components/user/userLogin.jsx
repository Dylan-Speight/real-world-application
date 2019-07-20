import React, {Component} from 'react'
import LoggedInContext  from './userContext'
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';


export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password: ""
        }
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/api/authenticate', {
            method: 'POST',
            body: JSON.stringify(
                this.state
            ),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(async res => {
            const response = await res.json()
            cookie.save("token", await response.token, {path: "/"})
            if (res.status === 200) {
                cookie.save("isLoggedIn", "true", {path: "/"})
                this.context.setLoggedInState(true)
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
        alert("Logged" + this.state.email + this.state.password )
    }
    render(){
        this.context = this.context
        return(
            <div>
                <p> Don't have an account?</p>
                <Link to="/register">Sign Up</Link>
                <div>
                <form onSubmit={ this.onSubmit }>
                <input 
                    name="email" 
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    required
                    ></input>
                    <input name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                    ></input>
                    <input type="submit" value="Login"/>
                </form>

                </div>
            </div>
        )
    }
}

UserLogin.contextType = LoggedInContext
