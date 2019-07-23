import React, {Component} from 'react'
import LoggedInContext  from './userContext'
import cookie from 'react-cookies';
import { Link } from 'react-router-dom';

const uri = "https://magnanimous-goat-5432.herokuapp.com/";


export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const { value, name } = event.target;
        console.log(this.state)
        this.setState({[name]:value})
    }
    onSubmit = (event) => {
        event.preventDefault();
        fetch(`${uri}/api/authenticate`, {
            method: 'POST',
            body: JSON.stringify(
                this.state
            ),
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(async res => {
            console.log(this.state)
            const response = await res.json()
            cookie.save("token", await response.token, {path: "/"})
            if (res.status === 200) {
                cookie.save("isLoggedIn", "true", {path: "/"})
                cookie.save("email", `${this.state.email}`, {path: "/"})
                this.context.setLoggedInState({isLoggedIn: true, email: this.state.email, token: response.token})
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

UserLogin.contextType = LoggedInContext
