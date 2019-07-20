import React, {Component} from 'react'
import ApolloClient, { gql } from "apollo-boost";
import axios from 'axios'
var jwtDecode = require('jwt-decode');


export default class UserLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email:"",
            password: "",
            authenticated:""
        }
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.client = this.client.bind(this)
        this.client = new ApolloClient({
            uri: "http://localhost:4000"
          })
        this.gqlreturn = this.gqlreturn
        }
    
    handleChange(event) {
        this.client.query({
            query: gql`
            {
                {
                    domainClientID
                    domainSecret
                    
                }
            }
            `
        }).then(result => console.log(result)).catch(err => console.log(err))
            // this.gqlreturn = result.data.hello)
        console.log(event.target.value)
        this.setState({[event.target.name]:event.target.value})
    }
    login (event) {
        console.log(event.target.name)
       
        alert("Logged" + this.state.email + this.state.password )
    }
    render(){
        let testreturn = this.gqlreturn

        return(
            <div>
                <div>
                <form onSubmit={this.login}>
                    {/* <label>Username:</label> */}
                    <input name="email" placeholder="Email" onChange={this.handleChange}></input>
                    {/* <label>Password:</label> */}
                    <input name="password" placeholder="Password" onChange={this.handleChange}></input>
                    <input type="submit" value="Login"/>
                </form>
                </div>
            {testreturn}
            </div>
        )
    }
}