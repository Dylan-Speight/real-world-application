import React, {Component} from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
var jwtDecode = require('jwt-decode');


export default class UserRegister extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password: "",
            isRegistering: true

        }
        this.register = this.register.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
        fetch('http://localhost:4000/api/register', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(res => {
            if (res.status === 200) {
              this.props.history.push('/');
            } else {
               const error = res.json().then(response => {
                console.log(response.error)
                // return (response.error)
            }).then( () => {throw error})
            }
          })
          .catch(err => {
            alert('Error logging in please try again');
          });    
        }
    
    register (event) {
        console.log(event.target.name)
        
        alert("Logged" + this.state.email + this.state.password )
    }
    render(){
      if (this.state.isRegistering){
        return(
            <div>
                <div>
                <form onSubmit={this.onSubmit}>
                    <input 
                    name="email" 
                    placeholder="Email"
                    value={this.state.email} 
                    onChange={this.handleChange}
                    required></input>
                    <input name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    required></input>
                    <input type="submit" value="Register"/>
                </form>
                </div>
            </div>
        )
      }
      return <Redirect to={'/login'} />

    }
}